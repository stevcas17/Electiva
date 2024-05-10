import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Questions } from '../../../pages/help/interface';

const QuestionsPortal = ({ query, questionArray }: any) => {
  const [expanded, setExpanded] = useState('');
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [currentQuestions, setcurrentQuestions] = useState<Questions[]>(questions);

  useEffect(() => {
    if (questionArray) {
      setQuestions(questionArray);
      setcurrentQuestions(questionArray);
    }
  }, [questionArray]);

  useEffect(() => {
    if (query && questions.length) {
      const cleanQuery = deleteDiacritics(query.toLowerCase());
      const queryResult = questions.filter(item => {
        const cleanTitle = deleteDiacritics(item.title.toLowerCase());
        const cleanDescription = deleteDiacritics(item.description.toLowerCase());
        return cleanTitle.includes(cleanQuery) || cleanDescription.includes(cleanQuery);
      });
      if (queryResult && queryResult.length) {
        setcurrentQuestions(queryResult);
      }
    }
  }, [query, questions]);

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  const deleteDiacritics = (texto: string) => {
    return (
      texto
        .normalize('NFD')
        // eslint-disable-next-line no-misleading-character-class
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, '$1')
        .normalize()
    );
  };

  useEffect(() => {
    if (localStorage.getItem('lineAttention') !== null) {
      setTimeout(() => {
        setExpanded('panel11');
      }, 400);
    }
  }, []);

  return (
    <>
      {currentQuestions.map(el => (
        <Accordion
          expanded={expanded === `panel${el.id}`}
          key={el.id}
          style={{ boxShadow: 'none' }}
          onChange={handleChange(`panel${el.id}`)}
        >
          <AccordionSummary
            expandIcon={
              <Icon
                size={1}
                path={expanded === `panel${el.id}` ? mdiMinusCircleOutline : mdiPlusCircleOutline}
                className="menu-item-image"
              />
            }
            aria-controls={`panel${el.id}bh-content`}
            id={`panel${el.id}bh-header`}
          >
            <Typography
              component={'span'}
              sx={{ width: '100%', flexShrink: 0, fontFamily: 'inherit, sans-serif', fontWeight: 500 }}
            >
              {el.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'span'} sx={{ width: '100%', flexShrink: 0, fontFamily: 'inherit, sans-serif' }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: el.description
                }}
              ></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default QuestionsPortal;
