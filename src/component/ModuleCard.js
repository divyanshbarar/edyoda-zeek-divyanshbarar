import React from 'react'
import "./ModuleCard.css"
function ModuleCard({ url, name }) {
    return (
        <div className="moduleCard">
            {/* details of every module card with numbers */}
            <div className="tech__card">
                <img src={url} alt="" />
                <div>
                    <h4 className="subject__name">{name}</h4>
                    <div className="card__avatar">
                        <img src="/images/default-avatar.svg" alt="" />
                        <p>John</p>
                    </div>
                </div>
            </div>
            <div className="card__infoDisplay">

                <div className="card__info">
                    <h4>2</h4>
                    <p>Works</p>
                </div>
                <div className="card__info">
                    <h4>6</h4>
                    <p>Assignments</p>
                </div>
                <div className="card__info">
                    <h4>3</h4>
                    <p>MCQ Quiz</p>
                </div>

            </div>


        </div>
    )
}

export default ModuleCard
