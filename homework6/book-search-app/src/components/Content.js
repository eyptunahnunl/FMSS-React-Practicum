import React from "react";
import Card from "./Card";
import { useBooks } from "../context/MainContext";

function Content() {
  const { books } = useBooks();
  return (
    <>
      <div className=" gap-4 pt-12 py-12 max-h-min justify-evenly items-center flex flex-wrap flex-col sm:flex-row test overflow-x-hidden w-full">
        {books &&
          books.map((data, key) => (
            <div key={key}>
              <Card
                key={key}
                img={
                     data.volumeInfo.imageLinks &&data.volumeInfo.imageLinks.smallThumbnail 
                  
                }
                alt={data.volumeInfo.imageLinks}
                title={data.volumeInfo.title}
                authors={data.volumeInfo.authors}
                link={data.volumeInfo.previewLink}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default Content;
