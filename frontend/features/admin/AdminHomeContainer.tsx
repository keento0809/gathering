import { useSession } from "next-auth/react";
import GithubAuthButton from "../../components/Button/GithubAuthButton";
import { signOut, signIn } from "next-auth/react";
import Card from "../../components/Card/Card";
import Link from "next/link";
import { GatheringType } from "../../types/gathering";
import { AdminUserInfoObj } from "../../types/admin";
import GatheringsList from "../../components/List/GatheringsList";
import { useLoadingContext } from "../../context/LoadingContext";
import { useEffect } from "react";
import Title from "../../components/Title/Title";

type Props = {
  data: { hostGatherings: GatheringType[]; currUser: AdminUserInfoObj };
};

const AdminHomeContainer = ({ data }: Props) => {
  const { data: session } = useSession();
  const { hostGatherings, currUser } = data;
  const adminId = currUser._id;
  const { isLoading, setIsLoading } = useLoadingContext();

  useEffect(() => {
    isLoading && setIsLoading(false);
  }, []);

  return (
    <div className="home-title z-20">
      {!session && (
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
                    <Link href={"/admin/home"}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          signIn("github");
                        }}
                      >
                        <GithubAuthButton text="Login with GitHub" />
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      )}
      {session && (
        <div>
          <div className="flex flex-row items-center justify-between lg:justify-center">
            <div className="mb-6">
              <Title title={`Hello, ${session.user?.name}!`} />
            </div>
            <Link href={"/admin/home"}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                className="inline-block pr-2 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </a>
            </Link>
          </div>
          <div className="pt-8 pb-4">
            <div className="">
              <h3 className="text-xl lg:pb-2 lg:text-center font-bold tracking-tight overflow-y-scroll">
                Gatherings You Organize - ({hostGatherings.length})
              </h3>
              <GatheringsList data={hostGatherings} />
            </div>
            <div className="pb-6">
              <div className="fixed z-40 bottom-10 right-6 inline-block p-4 text-white bg-red-500 hover:bg-red-600 hover:scale-105 transition-all cursor-pointer rounded-full">
                <Link href={`/admin/${adminId}/newGathering`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHomeContainer;
