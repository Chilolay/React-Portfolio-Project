import { Container, Row, Col } from "reactstrap";
import pottedMonstera from "../../assets/potted_monstera.webp"
import "./Articles.scss"

const ExampleArticle = () => {
  return (
    <Container className="bg-light exampleArticle">
      <h1>Toxic Plants</h1>
      <Row>
        <Col className="mb-4 px-5">
          <img
            className="headerImage"
            src={pottedMonstera}
            alt="Potted monstera plant"
          />
          <p>
            There are many houseplants that are poisonous to humans and pets and
            most of them are more common than you'd think. A few words of
            warning and advice before we get to the list.
            <br />
            Before purchasing a new plant check if it's poisonous and to what
            degree so you can make an informed decision on if it's the right
            plant for you. When researching plants remember plants may have
            several common names but will only have one botanical name. Do not
            grow potentially poisonous plants within reach of children or pets.
            <br />
            Exposure to poison is caused by ingestion of plants or plant parts
            and/or contact with the skin. Ingestion of plant parts can cause
            internal poisoning, heart or kidney failure. Skin contact can
            produce symptoms such as dermatitis and allergic reaction.
            <br />
            <br />
            <strong>
              If you're concerned about a child or pet you suspect consumed or
              touched a poisonous plant go to an emergency room, consult your
              veterinarian, or call the 24-hour{" "}
              <a
                href="https://www.poison.org/"
                target="_blank"
                rel="noreferrer"
              >
                National Capital Poison Control
              </a>{" "}
              at 800-222-1222
            </strong>{" "}
            or{" "}
            <strong>
              <a
                href="https://www.petpoisonhelpline.com/"
                target="_blank"
                rel="noreferrer"
              >
                Pet Poison Helpline
              </a>{" "}
              at 855-764-7661.
            </strong>
            <br />
            <br />
            <br />
            Here is an extensive list of poisonous houseplants, which parts are
            poisonous, and the symptoms produced by consuming or touching the
            plant. It's important to note that this list does not cover every
            single plant poisonous to humans or animals.
          </p>
          <ul>
            <li>
              <h3>Dieffenbachia</h3>
              <p>
                All parts of this plant contain calcium oxalate. Ingestion can
                cause intense irritation of mucous membranes, produces swelling
                of tongue, lips and palate. Swelling, redness, and irritation
                can also occur if the skin or eyes are exposed. This plant can
                be fatal to both humans and animals if ingested in a large
                amount.
              </p>
            </li>
            <li>
              <h3>Ivy</h3>
              <p>
                The Hedera family of Ivy, including the popular English Ivy,
                contains toxic saponins in its leaves, berries, stems. Ivy is
                poisonous to both humans and animals. All parts of the plant can
                cause symptoms that include skin irritation, burning throat,
                fever, rash, vomiting or diarrhea. In severe cases, it can also
                cause breathing difficulties and coma.
              </p>
            </li>
            <li>
              <h3>Easter Lily</h3>
              <p>
                If you have cats it's best to avoid bringing Easter Lillies into
                your home. The entire plant including the pollen is poisonous to
                them. Ingesting even small amounts of any part of the plant can
                lead to a cat's death from kidney failure if not treated by a
                veterinarian.
              </p>
            </li>
            <li>
              <h3>Peace Lily</h3>
              <p>
                All parts of this plant contain calcium oxalate. Ingestion can
                cause intense irritation of mucous membranes, produces swelling
                of tongue, lips and palate. This plant can be fatal to both
                humans and animals if ingested in a large amount.
              </p>
            </li>
            <li>
              <h3>Daffodils, Tulips</h3>
              <p>
                Both of these plants belong to a family of plants called
                narcissus. All plants in this family contain lycorine that is
                toxic to both humans and pets. All parts of daffodil and tulips
                contain lycorine but the highest concentration is in the bulb.
                Ingestion can cause can cause intense stomach problems, high
                blood pressure, and in severe cases, heart problems and
                convulsions.
              </p>
            </li>
            <li>
              <h3>Philodendron</h3>
              <p>
                Philodendrons are poisonous to both humans and pets. These
                plants contain calcium oxalate which can cause toxicity when the
                plant is ingested or improperly handled. Ingestion can cause
                burning and swelling of lips, tongue, and throat, along with
                vomiting and diarrhea. Contact with skin or eyes can cause rash,
                irritation, corneal abrasions, and, rarely, permanent eye
                damage.
              </p>
            </li>
            <li>
              <h3>Monstera</h3>
              <p>
                There are about 48 species of Monstera which are mildly
                poisonous to humans and poisonous to both cats and dogs. All
                parts of the monstera contain calcium oxalate. Ingestion can
                cause intense irritation of mucous membranes, produces swelling
                of tongue, lips and palate, as well as stomach upset. The sap
                may cause contact dermatitis and eye irritation.
              </p>
            </li>
            <li>
              <h3>Pothos</h3>
              <p>
                Pothos are a close relative of the Philodendron and like
                philodendron they contain calcium oxalate crystals. Pothos are
                poisonous to humans and pets. Ingestion can cause intense
                irritation of mucous membranes, produces swelling of tongue,
                lips and palate, as well as stomach upset. The sap may cause
                contact dermatitis and eye irritation.
              </p>
            </li>
            <li>
              <h3>Arrowhead Plant</h3>
              <p>
                Also known as Syngonium, all parts of the plant contain calcium
                oxalate crystals. This makes them poisonous to humans and pets.
                Ingestion can cause intense irritation of mucous membranes,
                produces swelling of tongue, lips and palate, as well as stomach
                upset.
              </p>
            </li>
            <li>
              <h3>Sago Palm</h3>
              <p>
                All parts of this plant, including the seeds, fronds and roots,
                are toxic due to them containing cycasin. This plant is
                poisonous to both humans and pets. Ingesting sago palm causes
                vomiting and diarrhea, liver damage and even death.
              </p>
            </li>
            <li>
              <h3>ZZ Plant</h3>
              <p>
                ZZ Plants contain calcium oxalate and is poisonous to both
                humans and pets. Ingesting any part of this plant can cause
                vomiting, diarrhea, and abdominal pain. The sap may cause skin
                irritation or rash and can cause eye irritation.
              </p>
            </li>
            <li>
              <h3>Anthurium</h3>
              <p>
                All parts of the plant contain calcium oxalate crystals. This
                makes them poisonous to humans and pets. Ingestion can cause
                intense irritation of mucous membranes, produces swelling of
                tongue, lips and palate, as well as stomach upset. Sometimes
                acute inflammatory reactions including blistering and swelling
                of tissues can occur.
              </p>
            </li>
            <li>
              <h3>Snake Plant</h3>
              <p>
                All parts of the snake plant are poisonous to humans and animals
                due to the fact they contain saponins. Ingesting the leaves or
                stems of this plant can cause intense irritation of mucous
                membranes, produces swelling of tongue, lips and palate, as well
                as stomach upset.
              </p>
            </li>
            <li>
              <h3>Caladium</h3>
              <p>
                All parts of this plant contain calcium oxalate crystals and
                Asparagine. Ingesting this plant can cause intense irritation of
                mucous membranes, produces swelling of tongue, lips and palate,
                as well as stomach upset. The sap has been known to cause
                dermatitis, intense itching and burning and can cause eye
                irritation.
              </p>
            </li>
            <li>
              <h3>Alocasia</h3>
              <p>
                This plant is poisonous to humans and pets due to the fact that
                all parts of the plant contain calcium oxalate as well as
                asparagine and oxalic acid. Ingestion can cause nausea,
                diarrhea, vomiting, burning of the mouth and throat, and
                swelling of the eyes or mouth.
              </p>
            </li>
            <li>
              <h3>Aloe</h3>
              <p>
                The plant contains a compound called aloin, which can cause
                digestive discomfort and even kidney damage if ingested in large
                amounts. It is poisonous to both humans and pets.
              </p>
            </li>
            <li>
              <h3>Asparagus Fern</h3>
              <p>
                Asparagus Fern is toxic to pets due to sapogenin. The berries
                and sap can cause skin irritation and dermatitis in pets and
                humans. If a pet ingests the berries vomiting, diarrhea,
                abdominal pain may occur.
              </p>
            </li>
            <li>
              <h3>Spider Plant</h3>
              <p>
                While spider plants aren't technically poisonous for humans or
                pets they do contain chemical compounds that are mild
                hallucinogens. If ingested by cats they may experience
                hallucinations, gastric problems, such as an upset stomach,
                vomiting, or diarrhea.
              </p>
            </li>
            <li>
              <h3>Azalea</h3>
              <p>
                Azaleas are closely related to rhododendrons and both cause the
                same type of toxicity due to grayanotoxins. Ingesting any part
                of the plant will lead to poisoning in humans and pets.
                Ingestion can cause vomiting, diarrhea, lethargy, and in severe
                cases, seizures, coma or death.
              </p>
            </li>
            <li>
              <h3>Begonia</h3>
              <p>
                According to the National Capital Poison Center, begonias are
                not toxic to humans. However, begonias, especially their tubers,
                due to calcium oxalates are highly toxic to household pets.
                Ingestion of begonias can cause mouth irritation, drooling,
                difficulty swallowing and vomiting.
              </p>
            </li>
            <li>
              <h3>Jade Plant</h3>
              <p>
                Jade plant contains a toxic compound called bufadienolides that
                can cause vomiting, slow heart rate, and in severe cases, coma
                and death. They are mildly poisonous to humans and extremely
                poisonous to pets.
              </p>
            </li>
            <li>
              <h3>Cardboard Palm</h3>
              <p>
                All parts of the Cardboard Palm plant contain the toxic cycasin
                compound, including the leaves, stems, roots, and seeds. This
                makes it Poisonous for humans and pets. If ingested it can can
                cause severe health problems such as vomiting, diarrhea, liver
                failure, and even death.
              </p>
            </li>
            <li>
              <h3>Dracaena</h3>
              <p>
                The entire Dracaena plant is considered poisonous, including the
                leaves, stem, and sap. The berries of some Dracaena species are
                also poisonous. This plant is poisonous to both humans and pets.
                Ingestion can cause gastrointestinal issues such as vomiting and
                diarrhea, as well as irritation of the mouth and throat.
              </p>
            </li>
            <li>
              <h3>Geranium</h3>
              <p>
                Geraniums are not poisonous to humans but the Pelargonium
                species are poisonous for pets. Geraniums contain linalool,
                gerinaol which can cause skin rashes, vomiting, lethargy, and
                loss of appetite.
              </p>
            </li>
            <li>
              <h3>Hyacinth</h3>
              <p>
                The bulbs of hyacinths contain oxalic acid, which make it toxic
                to humans and pets. All parts of the plant contain oxalic acid
                but the bulbs have the highest concentration. Symptoms of
                ingestion include vomiting, diarrhea, abdominal pain, and in
                severe cases, convulsions, respiratory failure, and even death
              </p>
            </li>
            <li>
              <h3>Chrysanthemum</h3>
              <p>
                {" "}
                Chrysanthemums contain pyrethrins which make them toxic to both
                humans and pets. All parts of the plant contain the toxic
                compounds, including the flowers, leaves, and stems. They can
                cause skin irritation if toucched as well as nausea, vomiting,
                and in rare cases, anaphylaxis if ingested.
              </p>
            </li>
            <li>
              <h3>Rubber Plant</h3>
              <p>
                The sap of the rubber plant contains a toxic substance called
                ficin, which can cause skin irritation and eye irritation. All
                parts of the plant contain the toxic sap, including the leaves,
                stem, and roots making it poisonous to humans and pets.
                Ingestion can cause irritation and inflammation of the mouth,
                throat, and digestive tract, leading to symptoms such as
                vomiting, diarrhea, and abdominal pain. In severe cases,
                ingestion of the sap can lead to anaphylaxis, which is a severe
                allergic reaction that can be life-threatening.
              </p>
            </li>
            <li>
              <h3>Lantana</h3>
              <p>
                Lantana is considered poisonous to humans and pets due to a
                groups of toxins it contains. All parts of the plant contain
                these toxins including the leaves, stems, flowers, and unripe
                berries. Ingestion can cause gastrointestinal symptoms such as
                vomiting, diarrhea, and abdominal cramps if ingested in large
                quantities. In severe cases for pets lantana can lead to liver
                failure and even death.
              </p>
            </li>
            <li>
              <h3>Yew</h3>
              <p>
                Yew is commonly used for bonsai and is considered poisonous to
                both humans and pets. All parts of the yew plant are toxic,
                including the needles, bark, and seeds, but the highest
                concentration of the toxic alkaloid called taxine is found in
                the seeds. Symptoms of yew poisoning can be severe and include
                vomiting, diarrhea, abdominal pain, tremors, difficulty
                breathing, and in some cases, sudden collapse and death.{" "}
              </p>
            </li>
            <li>
              <h3>Clivia</h3>
              <p>
                Clivia is considered toxic to humans and pets because it
                contains lycorine. All parts of the clivia plant are considered
                poisonous, including the leaves, stems, flowers, and roots.
                Ingestion can cause gastrointestinal symptoms such as nausea,
                vomiting, abdominal pain, and diarrhea if ingested. Ingestion of
                large quantities of clivia can also cause more serious symptoms
                such as tremors, seizures, and even coma.{" "}
              </p>
            </li>
            <li>
              <h3>Poinsettia</h3>
              <p>
                Poinsettias are poisonous to humans and pets. The milky white
                sap of the plant contains a low concentration of irritating
                latex, which can cause skin irritation, itching, and redness
                upon contact. Ingestion of the plant can cause mild symptoms
                such as nausea, vomiting, and diarrhea, but it's rare for
                poinsettias to cause serious poisoning or death.
              </p>
            </li>
            <li>
              <h3>Amaryllis</h3>
              <p>
                All parts of this plant are poisonous, but the bulbs are the
                most dangerous. Amaryllis contains lycorine that is most highly
                concentrated in the bulbs. It is poisonous to humans and pets.
                If ingested amaryllis can cause nausea, vomiting, diarrhea,
                abdominal pain, tremors, and convulsions. In severe cases,
                ingestion of amaryllis can lead to seizures, coma, and even
                death.
              </p>
            </li>
            <li>
              <h3>Myrtle</h3>
              <p>
                There are quite a few types of myrtle that are considered
                poisonous to humans and pets. A few are creeping myrtle, running
                myrtle and myrtle spurge. Myrtle is poisonous if ingested,
                causing nausea, vomiting and diarrhea. This plant exudes toxic,
                milky latex, which can cause severe skin and eye irritations.
                Severe cases in pets can lead to Vomiting, diarrhea, low blood
                pressure, depression, tremors, seizures, coma, death.
              </p>
            </li>
            <li>
              <h3>Oleander</h3>
              <p>
                All parts of this plant are highly poisonous to humans and pets.
                It contains toxic compounds called cardiac glycosides, which can
                affect the heart and cause cardiac arrest. Symptoms of ingestion
                may include nausea, vomiting, diarrhea, irregular heartbeat, low
                blood pressure, seizures, and even death.{" "}
              </p>
            </li>
            <li>
              <h3>Oxalis</h3>
              <p>
                All parts of this plant contain oxalic acid which can be
                poisonous in large amounts. Its considered toxic to pets. If
                ingested by pets or humans in large amounts symptoms may include
                vomiting, diarrhea, and other digestive issues.
              </p>
            </li>
            <li>
              <h3>Aralia</h3>
              <p>
                All parts of this plant are considered toxic due to the fact
                that they contain saponins. It can be poisonous to humans and
                animals. Symptoms of ingestion include vomiting, diarrhea, and
                other digestive issues. Skin contact with the plant's sap may
                cause skin irritation.
              </p>
            </li>
            <li>
              <h3>Australian Umbrella Tree</h3>
              <p>
                All parts of this plant are poisonous to humans and pets. They
                contain calcium oxalate crystals, saponins and terpenoids.
                Symptoms of ingestion may include vomiting, diarrhea, and other
                digestive issues. Skin contact with the plant's sap may cause
                skin irritation.
              </p>
            </li>
            <li>
              <h3>Jerusalem cherry</h3>
              <p>
                All parts of this plant are poisonous as it contains solanine
                and other toxic alkaloids. Poisonous to humans and pets.
                ingestion symptoms include vomiting, diarrhea, abdominal pain,
                and other digestive issues. In severe cases, the plant can cause
                difficulty breathing, seizures, and even death.
              </p>
            </li>
            <li>
              <h3>Cyclamen</h3>
              <p>
                All parts of this plant are toxic because it contains cyclamin.
                The highest concentration of cyclamin being found in the root.
                Ingestion symptoms include nausea, vomiting, diarrhea, and other
                digestive issues. In severe cases, the plant can cause irregular
                heartbeat, seizures, and even death.
              </p>
            </li>
            <li>
              <h3>Kalanchoe</h3>
              <p>
                Considered poisonous to humans and pets. The leaves, flowers
                contain cardiac glycosides and the sap can cause irritation and
                dermatitis. Ingestion symptoms include vomiting, diarrhea,
                weakness, tremors, and irregular heartbeats.
              </p>
            </li>
            <li>
              <h3>Umbrella Plant</h3>
              <p>
                Umbrella plants contain calcium oxalate and all parts of the
                plant are considered poisonous. The plant is poisonous to humans
                and pets. Ingestion symptoms include burning and swelling of the
                mouth and throat, drooling, vomiting, diarrhea, and difficulty
                breathing. In severe cases, ingesting large amounts of the plant
                can lead to seizures and even death.
              </p>
            </li>
            <li>
              <h3>Bay laurel</h3>
              <p>
                Bay Laurel is considered poisonous to humans and pets. The
                leaves and berries of the plant contain a toxic substance called
                lauric acid. If ingested, Bay Laurel can cause vomiting,
                diarrhea, stomach pain, burning of the mouth and throat,
                dizziness, confusion, and even coma. The severity of symptoms
                depends on the amount of plant material consumed and can be
                fatal in rare cases.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ExampleArticle;
