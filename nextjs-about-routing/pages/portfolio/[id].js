import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  // 確認用
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>FOR PROJECT</h1>
    </div>
  );
}

export default PortfolioProjectPage;
