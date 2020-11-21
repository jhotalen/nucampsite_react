import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class CampsiteInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComments(comments) {
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

  renderCampsite(campsite) {
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

  render() {
    if (this.props.campsite) {
      return (
        <div className="row">
          {this.renderCampsite(this.props.campsite)}
          {this.renderComments(this.props.campsite.comments)}
        </div>
      );
    } else return <div></div>;
  }
}
export default CampsiteInfo;
