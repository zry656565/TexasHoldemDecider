/**
 * Created by JerryZou on 14-4-20.
 */

var Suit = {
    Spade: 0,
    Heart: 1,
    Diamond: 2,
    Club: 3
};

var Card = function() {
    this.suit = Math.floor(Math.random() * 4);
    this.point = Math.floor(Math.random() * 13);
};

var Desk = function() {
    this.cards = [];
}

var Player = function() {
    this.card1 = new Card();
    this.card2 = new Card();
}