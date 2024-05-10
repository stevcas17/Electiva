import { useState, useEffect } from 'react';
import { History } from 'history';
import Nav from '../../components/molecules/navbar/Nav';

//Material
import Container from '@mui/material/Container';

//Icons
import { mdiMagnify } from '@mdi/js';

//interfaces
import InputFrom from '../../components/atoms/input/InputFrom';

import { initialTabs, GouQuestions, QrQuestions, CollectionModels } from '../../data/templates-data';
import './Help.scss';
import { FooterHome } from '../../components/molecules';
import TabPanels from '../../components/atoms/tab-panels/TabPanels';
import QuestionsPortal from '../../components/atoms/questions/QuestionsPortal';

export default ({ history }: { history: History }): JSX.Element => {
  const [valueQuestions, setValueQuestions] = useState(0);
  const [query, setQuery] = useState('');
  const [tabs, setTabs] = useState(initialTabs);

  const handleChangeTabsQuestions = (newValue: any) => {
    tabs.forEach(element => {
      element.className = 'question-tabs-item inactive-tabs';
    });
    tabs[newValue].className = 'question-tabs-item active-tabs';
    setTabs([...tabs]);
    setValueQuestions(newValue);
  };

  useEffect(() => {
    if (history.location.state === 'lineAttention') {
      localStorage.setItem('lineAttention', 'lineAttention');
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 300);
    }
  }, []);

  return (
    <>
      <Nav history={history} />
      <div className="container__header"></div>
      <div className="container__help">
        <div className="help-page-container ">
          <div className="card-container">
            <Container disableGutters>
              <div className="card-header">
                <div className="card-header-container">
                  <div className="card-header-title">¿Cómo podemos ayudarte?</div>
                  <div className="card-header-subtitle">Encuentra aquí la respuesta a tus preguntas.</div>
                  <InputFrom placeholder={'Buscar'} value={query} onChange={setQuery} iconRightCustom={mdiMagnify} />
                </div>
              </div>

              <div className="question-tabs-main">
                <div className="question-tabs-container">
                  {tabs.map(el => (
                    <div className={el.className} key={el.index} onClick={() => handleChangeTabsQuestions(el.index)}>
                      {el.title}
                    </div>
                  ))}
                </div>
                <TabPanels value={valueQuestions} index={0}>
                  <QuestionsPortal query={query} questionArray={GouQuestions} />
                </TabPanels>
                <TabPanels value={valueQuestions} index={1}>
                  <QuestionsPortal query={query} questionArray={QrQuestions} />
                </TabPanels>
                <TabPanels value={valueQuestions} index={2}>
                  <QuestionsPortal query={query} questionArray={CollectionModels} />
                </TabPanels>
              </div>
            </Container>
          </div>
        </div>
        <FooterHome />
      </div>
    </>
  );
};
