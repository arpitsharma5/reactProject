import './App.css';
import Articles from "./Articles";
import {useState} from "react";

function SortReact() {
  const ARTICLES = [
    {
      title: "A message to our customers",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "Alphabet earnings",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      title: "Artificial Mountains",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "Scaling to 100k Users",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      title: "the Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "Simple text editor has 15k monthly users",
      upvotes: 7,
      date: "2010-12-31",
    },
  ];
  const sortedInitialArticles = [...ARTICLES].sort((a, b) => b.upvotes - a.upvotes);
  const [articles, setArticles] = useState(sortedInitialArticles);
  const upvote = () => {
    const sortByVotes = [...articles].sort((a, b) => b.upvotes - a.upvotes);
    setArticles(sortByVotes);
  }
  const mostRecent = () => {
    const sortByDate = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
    setArticles(sortByDate);
  }



  return (
    <div className="App">
      <nav header="Sorting Articles">
        <div className="row align-items-center justify-content=-center">
          <button className="btn btn-primary" onClick={upvote}>Most Upvoted</button>
          <button className="btn btn-primary" onClick={mostRecent}>Most Recent</button>
        </div>
      </nav>
    <Articles articles={articles}/>
    </div>
  );
}

export default SortReact;
