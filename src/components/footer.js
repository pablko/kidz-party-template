import React from 'react'

export default class Layout extends React.Component {
   render() {
      return (
         <footer className="small py-3">
            <div className="container">
               <div className=" text-center text-light">
                  &copy; <span>{(new Date().getFullYear())}</span>
                  - by <a href="https://github.com/pablko">Pablo Colqui</a> with <a href="http://gatsbyjs.org">GatsbyJS</a>
               </div>
            </div>
         </footer>
      )
   }
}


