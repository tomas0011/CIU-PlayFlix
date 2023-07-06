import { Fragment } from 'react';
import {
  Button,
  Alert
} from 'react-bootstrap';

import './ActionAlert.css';

export const ActionAlert = ({ show, setShow, title, message, action }) => {
  return (
    <Fragment>
      {
        show && 
          <Alert
            className='Alert'
            show={show}
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading>{title}</Alert.Heading>
            <p>{message}</p>
            <div className="d-flex justify-content-end">
              <Button
                onClick={action}
                variant="danger"
              >
                Delete
              </Button>
            </div>
          </Alert>
      }
    </Fragment>
  );
}
