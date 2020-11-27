import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderCampsite({ campsite }) {
  return (
    <div class="col-md-5 m1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardTitle>{campsite.name}</CardTitle>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div class="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div>
              <div key={comment.id}>
                {comment.text} <br></br>--{comment.author}{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
                <br></br>
                <br></br>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else return <div></div>;
}

export default CampsiteInfo;
