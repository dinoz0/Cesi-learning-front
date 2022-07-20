import { NextPage } from "next";
import Image from "next/image";

const errorNotFound: NextPage = () => {
  return (
    <div style={{ height: "500px" }}>
      <h1 style={{ textAlign: "center" }}>Mauvais lien CESI</h1>
      <div style={{ marginLeft: "27%" }}>
        <Image src="/404.png" alt="404" width={700} height={400} />
      </div>
    </div>
  );
};

export default errorNotFound;
