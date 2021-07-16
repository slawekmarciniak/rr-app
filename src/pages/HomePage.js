import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "czym jest teoria strun",
    author: "jan nowak",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, nesciunt sint sequi culpa vel, earum fuga, et aliquam cupiditate doloremque magni adipisci velit id accusantium aut alias perferendis fugiat laboriosam.",
  },
  {
    id: 2,
    title: "czym jest teoria strun",
    author: "jan nowak",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, nesciunt sint sequi culpa vel, earum fuga, et aliquam cupiditate doloremque magni adipisci velit id accusantium aut alias perferendis fugiat laboriosam.",
  },
  {
    id: 3,
    title: "czym jest teoria strun",
    author: "jan nowak",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, nesciunt sint sequi culpa vel, earum fuga, et aliquam cupiditate doloremque magni adipisci velit id accusantium aut alias perferendis fugiat laboriosam.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => {
    return (
      <Article
        key={article.id}
        {...article}
        // title={article.title}
        // author={article.author}
        // text={article.text}
      />
    );
  });
  return <div className="homepage">{artList}</div>;
};

export default HomePage;
