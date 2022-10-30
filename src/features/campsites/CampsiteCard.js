import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CampsiteCard = (props) => {
    return (
        <card>
            <CardImg
                width='100%'
                src={props.campsite.image}
                alt={props.campsite.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
        </card>
    );
};

export default CampsiteCard;