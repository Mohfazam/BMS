
import {client} from "@repo/db/client"

export default async function Home() {

  const user = await client.user.findFirst();

  return (
    <div>
      Hello ji, kya haal chal?
      <br />
      <br />
      <strong>
        userid: {user?.id}
        <br />
        username: {user?.username}
        <br />
        password: {user?.password}
      </strong>
    </div>
  );
}
