import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete , onEdit}) => {
  const listItems = books.map((book) => (
    <BookShow onEdit={onEdit}  onDelete={onDelete} book={book} />
  ));
  return (
    <div className="list-books">
      <h3>Reading Book</h3>
      {listItems}
    </div>
  );
};

export default BookList;
