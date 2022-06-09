class Site {
    constructor() {
        this.boards = []
    }
    //.find(element)
    addBoard(board) {
        if (this.boards.find((boardInfo) => boardInfo.name === board.name)) {
            throw Error()
        }
        board.addedBoard= true;
        this.boards.push(board)
    }
    findBoardByName(name) {
        return this.boards.find((board) => board.name = name)
    }
};


class Board { 
    constructor(name) {
        if (!name) {
            throw new Error();
        }
        this.name = name;
        this.articles = [];
    }

    //requirement
    publish(article){
        if(!this.addedBoard) throw new Error(); //notAddedBoard
            article.id = `${this.name}-${Math.random()}`;   //rule
            article.createdDate = new Date().toISOString(); //added date
            article.publishedArticle = true;
            this.articles.push(article);
            
    }


    getAllArticles() {
        return this.articles;
    }
};


class Article {
    constructor(article) {
        const { subject, content, author } = article;
        if (!subject || !content || !author ) throw new Error();
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.comment = [];
      
    }



    reply(comment) {
      if(!this.publishedArticle) throw new Error();
      comment.createdDate = new Date().toISOString();
      this.comment.push(comment);
}

    getAllComments() {
        return this.comment;
    }
}

class Comment {
    constructor(comment) {
        const { content, author } = comment;
        if(!content || !author ) throw new Error();
        this.content = content;
        this.author = author ;
        
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
