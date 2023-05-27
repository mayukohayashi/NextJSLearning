import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientid]",
      query: { id: "test", clientid: "testproject" },
    });
  }

  return (
    <div>
      <h1>The project of a givin client</h1>
      <button onClick={loadProjectHandler}>Loading test</button>
    </div>
  );
}

export default ClientProjectPage;
