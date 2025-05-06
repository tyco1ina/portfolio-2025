const getModal = (modal) => {
    if (modal === "TA") {
        return (
            <div class="modal fade" id="modal-TA">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Introduction to Database Systems</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            After I took CS4400: Introduction to Database Systems in the fall of 2024, I knew I wanted to TA the class.
                            The class was one of the most useful classes I had taken at Georgia Tech thus far, as almost any field of 
                            software engineering involves at least some knowledge of how to interact with both relational and non-relational
                            databases. Over the course of the fall 2024 semester, I had come to recognize the value of a strong
                            understanding of SQL. After applying for the role and passing the interview, I became a TA for the class.
                        </p>

                        <br></br>

                        <p>
                            As a new TA, I had several responsibilities in the role. Standard procedure for all TAs include grading, attending 
                            lecture, attending a weekly TA meeting, and holding two office hours per week to provide personalized, one-on-one 
                            help to students. Each one of us had additional responsibilities to improve the course in various ways. I created 
                            explaining concepts important for completing the class project, including creating EERD diagrams, and writing SQL
                            functions and stored procedures. Near the end of the semester, I was put in charge of managing the quizzes given
                            in class to assess understanding of course content, a role I will fully step into next semester.
    
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        )
    } else if (modal === "capitalOne") {
        return (
            <div class="modal fade" id="modal-C1">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Capital One</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                        In the summer of 2024, I interned at Capital One as a Software Engineering Intern in McLean, Virginia. I was one of about 
                        60 interns in the Technology Early Internship Program (TEIP), Capital One’s SWE Intern program for freshman and sophomores. 
                        The first half of my ten-week internship was dedicated to attending classes covering modern software engineering technologies 
                        and languages, such as Node.js, React.js, SQL, AWS, and more. The second half was spent working on a project with other TEIP interns 
                        using the skills we had learned in the first half.
                        </p>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        )
    } else if (modal === "dbnostix") {
        return (
            <div class="modal fade" id="modal-dbnostix">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">DBNOSTIX LLC</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            My entry for this experience will be added soon.
                        </p>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        )
    } else if (modal === "portfolio") {
        return (
            <div class="modal fade" id="modal-portfolio">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Portfolio Website</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            This is the 2025 remake of my portfolio website. I decided to launch another version of it to both refresh my frontend skills
                            and have a chance to deploy a website using Vercel. The UI is made with React and Bootstrap.
                        </p>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default getModal;