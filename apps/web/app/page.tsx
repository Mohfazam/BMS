
import {client} from "@repo/db/client"

export default async function Home() {

  const user = await client.user.findFirst();

  return (
    <div>
      Hello ji, kya haal chal?

      <strong>
        userid: {user?.id}
        username: {user?.username}
        password: {user?.password}
      </strong>
    </div>
  );
}
