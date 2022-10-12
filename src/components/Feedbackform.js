import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Feedbackform = ({
  formData,
  setFormData,
  storedData,
  setStoredData,
  setPopup,
}) => {
  const { name, gmail, phone, q1, q2, q3, q4 } = formData;
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(storedData);
    setStoredData([...storedData, formData]);
    setPopup(true);
    setFormData({
      name: "",
      gmail: "",
      phone: "",
      q1: "",
      q2: "",
      q3: "",
      q4: "",
    });
  };
  return (
    <div style={{ padding: "20px" }}>
      <Form onSubmit={submitHandler}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>
              Customer Name<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Customer Name"
              required
              name="name"
              value={name}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              Email<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="gmail"
              value={gmail}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>
            Phone<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="99999999999"
            required
            name="phone"
            value={phone}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>
              Please rate the quality of the service receive from the host.
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Excellent"
                name="q1"
                id="formHorizontalRadios1"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Excellent",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Good"
                name="q1"
                id="formHorizontalRadios2"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Good",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Fair"
                name="q1"
                id="formHorizontalRadios3"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Fair",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Bad"
                name="q1"
                id="formHorizontalRadios4"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Bad",
                  })
                }
              />
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity1">
            <Form.Label>
              Please rate the quality of the bevarage.
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Excellent"
                name="q2"
                id="formHorizontalRadios5"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Excellent",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Good"
                name="q2"
                id="formHorizontalRadios6"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Good",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Fair"
                name="q2"
                id="formHorizontalRadios7"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Fair",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Bad"
                name="q2"
                id="formHorizontalRadios8"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Bad",
                  })
                }
              />
            </Col>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>
              Was our restaurent clean.
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Excellent"
                name="q3"
                id="formHorizontalRadios9"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Excellent",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Good"
                name="q3"
                id="formHorizontalRadios10"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Good",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Fair"
                name="q3"
                id="formHorizontalRadios11"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Fair",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Bad"
                name="q3"
                id="formHorizontalRadios12"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Bad",
                  })
                }
              />
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity1">
            <Form.Label>
              Please rate overall dinning experience.
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Excellent"
                name="q4"
                id="formHorizontalRadios13"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Excellent",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Good"
                name="q4"
                id="formHorizontalRadios14"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Good",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Fair"
                name="q4"
                id="formHorizontalRadios15"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Fair",
                  })
                }
              />
              <Form.Check
                type="radio"
                label="Bad"
                name="q4"
                id="formHorizontalRadios16"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: "Bad",
                  })
                }
              />
            </Col>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit Review
        </Button>
      </Form>
    </div>
  );
};

export default Feedbackform;
