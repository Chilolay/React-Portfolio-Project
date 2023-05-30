import { Container, Row, Col } from "reactstrap"
import airPlantImg from "../../assets/airPlant.webp"

const ExampleCareGuide = () => {
  return (
    <Container className="bg-light px-4 my-4 article">
      <Row lg="1" md="1" xs="1">
        <Col>
          <img
            className="headerImg"
            src={airPlantImg}
            alt="Air Plant Illustration"
          />
        </Col>
        <Col>
          <h1>Air Plant Care Guide</h1>
          <h5>Scientific name: Tillandsia</h5>
          <h5>Family: Bromeliaceae</h5>
          <p>
            Tillandsia, commonly called Air plants are a type of epiphyte that
            belong to the bromeliad family. They can be found in the tropical
            and subtropical regions of the Americas.{" "}
          </p>
        </Col>
        <Col>
          <strong>Soil requirements:</strong> Air plants do not require soil to
          grow. They absorb moisture and nutrients through their leaves from the
          air. They are commonly grown in containers or mounted on driftwood,
          rocks, or other decorative elements.
          <br />
          <br />
          <strong>Light Requirements:</strong> Air plants light requirements
          vary by species but all will thrive in bright, indirect light. They
          can tolerate direct sunlight in the morning or late afternoon, but too
          much direct sun can scorch their leaves. Place them near a window with
          filtered light or in a spot that gets bright, indirect sunlight for
          most of the day. You can also use a full spectrum grow light if you
          can't meet the natural light requirements.
          <br />
          <br />
          <strong>Watering Requirements:</strong> Air plants require regular
          watering, but how often they need water depends on the humidity level
          and the air circulation in the room. When watering it's best to soak
          your plant in water every 7-10 days. Make sure to submerge the entire
          plant in water for 6-12 hours, then shake off any excess water and
          allow it to dry completely before putting it back in its container.
          Dry air in your home due to heating or air conditioning makes misting
          your plant unlikely to support it's water needs for long. As far as
          water quality air plants prefer rain water, filtered water, or tap
          water allowed to sit for chlorine to dissipate. Never use ditilled
          water as it will kill your plant.
          <br />
          <br />
          <strong>Temperature Requirements:</strong> Air plants prefer
          temperatures between 50-90°F (10-32°C). They can tolerate temperatures
          outside of this range for short periods, but prolonged exposure to
          extreme temperatures can harm the plant.
          <br />
          <br />
          <strong>Container Requirements:</strong> Air plants can be kept in a
          variety of containers, including glass terrariums, hanging baskets, or
          decorative bowls. If you're using a container, make sure it has
          drainage holes or is wide enough to allow air circulation around the
          plant. It's important to note that your display does not have any
          copper wire as it's poisonous to air plants.
          <br />
          <br />
          <strong>Air Circulation:</strong> Good air circulation is something
          that is often overlooked for air plants, as it helps to prevent excess
          moisture from building up on the leaves. You can improve air
          circulation by placing a small fan near your air plants or by keeping
          them in a location with good air flow such as near an open window.
          <br />
          <br />
          <strong>Fertilization:</strong> While air plants can absorb nutrients
          from the air, they will benefit from occasional fertilization. You can
          use a specially-formulated air plant fertilizer, or a water-soluble
          fertilizer diluted to half strength. Fertilize your air plants once a
          month during the growing season (spring and summer) and reduce
          fertilization during the dormant season (fall and winter).
          <br />
          <br />
          <strong>Pest Control:</strong> Air plants are relatively
          pest-resistant, but they can occasionally be affected by spider mites
          or mealybugs. If you notice any signs of infestation, isolate the
          affected plant and treat it with an insecticidal soap or neem oil.
          <br />
          <br />
          <strong>Propogation: </strong> Propagating air plants is relatively
          easy, and can be done by removing and replanting the offsets (also
          known as "pups") that grow at the base of the parent plant. Here's how
          to do it:
          <ol>
            <li>
              Wait until the offset is at least 1/3 the size of the parent plant
              and has several leaves of its own.
            </li>
            <li>
              Use a sharp, clean pair of scissors to cut the offset away from
              the parent plant at its base. Be careful not to damage the parent
              plant or the roots of the offset.
            </li>
            <li>
              Allow the cut ends to dry for a few hours to prevent rotting.
            </li>
            <li>
              Once the cut ends are dry, you can plant the offset in a new
              container or attach it to a new decorative element, such as a
              piece of driftwood or a wire frame.
            </li>
            <li>
              Mist the newly planted offset with water and place it in a
              location with bright, indirect light.
            </li>
            <li>
              Care for the new plant as you would any other air plant, and it
              should begin to grow and thrive on its own.
            </li>
          </ol>
          With proper care, the new offset will develop into a mature air plant
          and eventually produce its own offsets, continuing the cycle of growth
          and propagation.
        </Col>
      </Row>
    </Container>
  );
}

export default ExampleCareGuide