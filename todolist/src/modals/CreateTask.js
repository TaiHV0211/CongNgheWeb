import React ,{useState}from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const CreateTask = ({modal, toggle,save}) => {
    const mystyle = {
        margin: "10px 0 5px 0"
      };
    const mystylebtm = {
        margin: "10px 0 20px 0"
      };
      const [taskName, setTaskName] = useState('');
      const [description, setDescription] = useState('');
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        if(name == "taskName"){
            setTaskName(value)
        }else {
            setDescription(value)
        }
    }
    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className="form-control" 
                        style={mystylebtm} value={taskName} onChange= {handleChange} name="taskName"></input>
                    </div>
                    <div className="form-group" >
                        <label>Description</label>
                        <textarea rows="5" className="form-control"
                        style={mystyle} value={description} onChange= {handleChange} name="description"></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTask;