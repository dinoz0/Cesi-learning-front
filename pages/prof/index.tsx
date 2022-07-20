import { NextPage } from "next";
import { GetServerSideProps } from "next";
import Link from "next/link";
import styles from "../../styles/adminUser.module.css";

const AdminIndex: NextPage<{ cours: any }> = ({ cours }: { cours: any }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href={"/prof/cours"}>
        <h2 className={styles.link}>
          {cours.length} cours en base de données.
        </h2>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const headers = new Headers();
  headers.append("authorization", "Bearer " + context.req.cookies.token);
  const resUser = await fetch(`${process.env.API_URL}/cours`, {
    method: "GET",
    headers,
  });
  if (resUser.status === 401) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  const dataUser = await resUser.json();
  return {
    props: { cours: dataUser.data },
  };
};
export default AdminIndex;
