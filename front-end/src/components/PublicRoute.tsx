import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  // Evita a "piscada" (flash) de conteúdo público enquanto verifica o cookie
  const [isChecking, setIsChecking] = useState(true);
  const cookie = document.cookie;
  const navigate = useNavigate();

  useEffect(() => {
    // Procura por um cookie que comece com "user=" (indica que está autenticado)
    if (cookie) {
      const cookies = cookie.split("; ");
      const userCookie = cookies.find((c) => c.startsWith("user"));

      // Se estiver logado, redireciona para a página inicial ("/") e impede o acesso
      if (userCookie) {
        navigate("/", { replace: true });
        return;
      }
    }

    // Libera a exibição do conteúdo caso não esteja autenticado
    setIsChecking(false);
  }, [navigate]);

  // Exibe o fallback de carregamento até concluir a checagem
  if (isChecking) {
    return <p>carregando</p>;
  }

  // Renderiza a rota pública (ex: Login/Cadastro) para usuários não autenticados
  return <div>{children}</div>;
};

export default PublicRoute;
