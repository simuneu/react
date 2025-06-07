import Link from "next/link";

const Two = () => {
  return (
    <>
      <div>page Two</div>
      <Link href="/section04/04-01-01">go to page One </Link>
      <a href="/section04/04-01-01"></a>
    </>
  );
};
export default Two;
