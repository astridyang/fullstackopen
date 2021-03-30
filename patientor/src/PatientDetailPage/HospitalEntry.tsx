import React from 'react';
import { List, Icon, Segment } from 'semantic-ui-react';
import { HospitalEntry, Diagnosis } from '../types';
interface EntryProps {
    entry: HospitalEntry;
    diagnosis: Diagnosis[];
}

const HEntry:React.FC<EntryProps> = ({entry, diagnosis}) => {
    
    return (
        <Segment>
            <List verticalAlign='middle'>
                <List.Item>
                    <List.Content>
                        <List.Header>
                            { entry.date } <Icon name="stethoscope" size="large" />
                        </List.Header>
                        { entry.description }
                    </List.Content>
                </List.Item>
                <List.Item>
                discharge: { entry.discharge.date } { entry.discharge.criteria }
                </List.Item>
            </List>
            <List>
                {entry.diagnosisCodes && entry.diagnosisCodes.map(dc=><List.Item key={dc}>{dc}: {diagnosis.find(d=>d.code === dc)?.name}</List.Item>)}
            </List>
        </Segment>
    );
};
export default HEntry;