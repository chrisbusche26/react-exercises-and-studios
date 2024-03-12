import styles from './Description.module.css';
import React from 'react';

export function RecipeAuthor() {
    let authorLink = "hello";
    let authorPhoto = "https://img.delicious.com.au/_9SVJG5P/del/2016/07/ramsays-reddit-ama-favourites-32756-2.jpg";
    let authorName = "Rordon Gamsay";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    );
}

export class RecipeDescription extends React.Component {
    render() {
        return(
        <div>
            <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
        </div>
        )
    }
}

export default RecipeDescription;