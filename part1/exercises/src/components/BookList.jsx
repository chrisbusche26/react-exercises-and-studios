import React from 'react';
import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://m.media-amazon.com/images/I/412PSZfs4FL.jpg";
   let book2 = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg";
   let book3 = "https://target.scene7.com/is/image/Target/GUEST_21cb3af5-4e22-4447-8f56-076b566a2f40?qlt=65&fmt=pjpeg&hei=350&wid=350";
   
   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} className={classes.sizedImg} alt="Gideon the Ninth" />
         <img src={book2} className={classes.sizedImg} alt="Lord of the Rings" />
         <img src={book3} className={classes.sizedImg} alt="Ready Player One" />
      </div>      
   );
}