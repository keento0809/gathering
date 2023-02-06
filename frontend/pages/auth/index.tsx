import Card from "../../components/Card/Card";
import { signIn, useSession } from "next-auth/react";
import GithubAuthButton from "../../components/Button/GithubAuthButton";

const Login = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h2 className="text-2xl font-bold text-center tracking-tight text-primary dark:text-red-400">
        Admin Authentication
      </h2>
      <Card>
        <div className="text-center pt-4">
          {!session && (
            <div className="text-center text-base">
              <p>Please log in with GitHub below.</p>
              <div className="text-center pt-6">
                <span
                  onClick={() => {
                    signIn("github");
                  }}
                >
                  <GithubAuthButton text="Login with GitHub" />
                </span>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Login;
