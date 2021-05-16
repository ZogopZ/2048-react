import React from 'react';
import './Board.css'

const Board = ({ boardState }) => (
        <div class="board-container container">
            {console.log(boardState)}
            <div class="grid-box">{boardState[0]}</div>
            <div class="grid-box">{boardState[1]}</div>
            <div class="grid-box">{boardState[2]}</div>
            <div class="grid-box">{boardState[3]}</div>
            <div class="grid-box">{boardState[4]}</div>
            <div class="grid-box">{boardState[5]}</div>
            <div class="grid-box">{boardState[6]}</div>
            <div class="grid-box">{boardState[7]}</div>
            <div class="grid-box">{boardState[8]}</div>
            <div class="grid-box">{boardState[9]}</div>
            <div class="grid-box">{boardState[10]}</div>
            <div class="grid-box">{boardState[11]}</div>
            <div class="grid-box">{boardState[12]}</div>
            <div class="grid-box">{boardState[13]}</div>
            <div class="grid-box">{boardState[14]}</div>
            <div class="grid-box">{boardState[15]}</div>
        </div>
    );

export default Board;