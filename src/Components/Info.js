import React from "react";
import "../styles/Info.css"

export default function Info(props){
    return (
      <div className="info" onClick={(e) => props.onOutsideClick(e)}>
        <article className="info__card">
          <header className="info__header">
            <aside className="info__crossSec">
              <button className="info__cross">
                <svg
                  width="7"
                  height="7"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 17L17 1M1 1L17 17"
                    stroke="black"
                    strokeWidth="3"
                  />
                </svg>
              </button>
            </aside>
            <h3>👋 hi, this is simple todo app</h3>
          </header>
          <main className="info__main">
            <ul className="info__ul">
                <li className="info__li">Here you can create <ins>task list's</ins> and add <ins>todos</ins>.</li>
                <li className="info__li">The app uses the browser's local storage, so after clearing the cache, all lists will be deleted.</li>
                <li className="info__li">If you want to <span className="text__reset">reset</span> app tap <button className="text__here" onClick={props.onAreYouSureClick}>here</button></li>
                {props.areYouSure? <li className="areYouSure">reset app? <button className="yes" onClick={props.onAreYouSureReset}>yes</button> / <button className="no">no</button></li> : null}
                <li className="info__li">enjoy</li>
            </ul>
          </main>
          <footer className="info__footer">
            <span className="text__footer-span">by <a href="https://github.com/anydnny/simple-todo-app/tree/main" target="_blank" className="text__footer-link">any.</a></span>
          </footer>
        </article>
      </div>
    );
}