import React from 'react';
// default order based on votes desc
// desc order on button click
function Articles({articles}) {
    return (
        <div>
            <h1>Articles</h1>
            <table>
              <thead>
              <tr>
                <th>Title</th>
                <th>Upvotes</th>
                <th>Date</th>
              </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <tr key={index}>
                    <td>{article.title}</td>
                    <td>{article.upvotes}</td>
                    <td>{article.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
    )
}

export default Articles;