import React from "react";
import logo from "./assets/img/alkemy.png";
import "./App.css";
import axios from "axios";
import BreadCrumb from "./components/Breadcrumb";
import CardContainer from "./components/CardContainer";
import Button from "./components/Button";
import Results from "./components/Results";
import wizard from './lib/wizard'
import './style/zizzi.css'

const WIZARD = {
  steps: [
    {
      question: 'Ritieni che il lavoro che stai svolgendo ti stia facendo crescere professionalmente?',
      category: '1',
      answers: [
          {
              id: 100,
              image: 'faccinaTriste.png'
          },
          {
              id: 101,
              image: 'faccinaMeh.png'
          },
          {
            id: 101,
            image: 'faccinaFelice.png'
        }
      ]
  },
  {
      question: 'La direzione aziendale è chiara nell assegnazione dei compiti?',
      category: '2',
      answers: [
        {
          id: 100,
          image: 'faccinaTriste.png'
      },
      {
          id: 101,
          image: 'faccinaMeh.png'
      },
      {
        id: 101,
        image: 'faccinaFelice.png'
    }
      ]
  },
  {
      question: 'Quanto sono efficenti i Team Meetings?',
      category: '3',
      answers: [
        {
          id: 100,
          image: 'faccinaTriste.png'
      },
      {
          id: 101,
          image: 'faccinaMeh.png'
      },
      {
        id: 102,
        image: 'faccinaFelice.png'
    }
      ]
  },
  {
      question: 'Sei soddisfatto dei benefits che l azienda riconosce ai suoi dipendenti?',
      category: '4',
      answers: [
        {
          id: 103,
          image: 'faccinaTriste.png'
      },
      {
          id: 104,
          image: 'faccinaMeh.png'
      },
      {
        id: 105,
        image: 'faccinaFelice.png'
    }
      ]
  },
  {
      question: 'Quanto consiglieresti la nostra azienda ad amici e colleghi?',
      category: '5',
      answers: [
          {
              id: 107,
              title: '1',
              description: null,
              image: null
          },
          {
              id: 108,
              title: '2',
              description: null,
              image: null
          },
          {
              id: 109,
              title: '3',
              description: null,
              image: null
          },
          {
              id: 110,
              title: '4',
              description: null,
              image: null
          },
          {
              id: 111,
              title: '5',
              description: null,
              image: null
          },
          {
              id: 112,
              title: '6',
              description: null,
              image: null
          },
          {
              id: 113,
              title: '7',
              description: null,
              image: null
          },
          {
              id: 114,
              title: '8',
              description: null,
              image: null
          },
          {
              id: 115,
              title: '9',
              description: null,
              image: null
          },
          {
              id: 116,
              title: '10',
              description: null,
              image: null
          }
      ]
  }
  ],
  tree: {
    children: [
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    results: [8]
                  },
                  {
                    results: [8]
                  },
                  {
                    results: [9]
                  },
                  {
                    results: [10]
                  }
                ]
              },
              {
                children: [
                  {
                    results: [1]
                  },
                  {
                    results: [2]
                  },
                  {
                    results: [2]
                  },
                  {
                    results: [3, 2]
                  }
                ]
              }
            ]
          },
          {
            children: [
              {
                children: [
                  {
                    results: [6]
                  },
                  {
                    results: [6]
                  },
                  {
                    results: [7]
                  },
                  {
                    results: [7]
                  }
                ]
              },
              {
                children: [
                  {
                    results: [4]
                  },
                  {
                    results: [4]
                  },
                  {
                    results: [5]
                  },
                  {
                    results: [3, 5]
                  }
                ]
              }
            ]
          },
          {
            children: [
              {
                children: [
                  {
                    results: [6]
                  },
                  {
                    results: [6]
                  },
                  {
                    results: [7]
                  },
                  {
                    results: [7]
                  }
                ]
              },
              {
                children: [
                  {
                    results: [4]
                  },
                  {
                    results: [4]
                  },
                  {
                    results: [5]
                  },
                  {
                    results: [3, 5]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        children: [
          {
            children: [
              {
                children: [
                  {
                    results: [14]
                  },
                  {
                    results: [14]
                  },
                  {
                    results: [11]
                  },
                  {
                    results: [11]
                  }
                ]
              },
              {
                children: [
                  {
                    results: [14]
                  },
                  {
                    results: [14]
                  },
                  {
                    results: [11]
                  },
                  {
                    results: [11]
                  }
                ]
              }
            ]
          },
          {
            children: [
              {
                children: [
                  {
                    results: [12, 14]
                  },
                  {
                    results: [12, 14]
                  },
                  {
                    results: [13]
                  },
                  {
                    results: [13]
                  }
                ]
              },
              {
                children: [
                  {
                    results: [12, 14]
                  },
                  {
                    results: [12, 14]
                  },
                  {
                    results: [15]
                  },
                  {
                    results: [15]
                  }
                ]
              }
            ]
          },
          {
            children: [
              {
                children: [
                  {
                    results: [12, 14]
                  },
                  {
                    results: [12, 14]
                  },
                  {
                    results: [13]
                  },
                  {
                    results: [13]
                  }
                ]
              },
              {
                children: [
                  {
                    results: [12, 14]
                  },
                  {
                    results: [12, 14]
                  },
                  {
                    results: [13]
                  },
                  {
                    results: [13]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  results: [
    {
      id: 1,
      title: "Tieni in ordine il prato con il tagliaerba",
      description:
        "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      url:
        "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE66412%2CFRULE1920675"
    },
    {
      id: 2,
      title: "Tieni in ordine il prato con il tagliaerba",
      description:
        "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      url:
        "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1269%2CFRULE1920675"
    },
    {
      id: 3,
      title: "Trattorini tagliaerba",
      description:
        'Hai un giardino molto grande e hai bisogno di un rasaerba adeguato per tagliare il prato? Scegli un trattorino tagliaerba in grado di coprire grandi spazi di prato e accorciare il tempo necessario a completare il taglio dell"erba',
      url: "https://www.leroymerlin.it/prodotti/trattorini-CAT598-c"
    },
    {
      id: 4,
      title: "Tieni in ordine il prato con il tagliaerba",
      description:
        "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      url:
        "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE66412%2CFRULE1306"
    },
    {
      id: 5,
      title: "Tieni in ordine il prato con il tagliaerba",
      description:
        "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      url:
        "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1269%2CFRULE1306"
    },
    {
      id: 6,
      title: "Tieni in ordine il prato con il tagliaerba",
      description:
        "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      url:
        "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE66412%2CFRULE1920678"
    },
    {
      id: 7,
      title: "Tieni in ordine il prato con il tagliaerba",
      description:
        "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      url:
        "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1269%2CFRULE1920677"
    },
    {
      id: 8,
      title: "Tieni in ordine il prato con il tagliaerba",
      description:
        "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      url:
        "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1920152%2CFRULE1920677"
    },
    {
      id: 9,
      title: "Tieni in ordine il prato con il tagliaerba",
      description:
        "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      url:
        "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1920153%2CFRULE1920677"
    },
    {
      id: 10,
      title: "Tieni in ordine il prato con il tagliaerba",
      description:
        "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      url:
        "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1920154%2CFRULE1920677"
    },
    {
      id: 11,
      title:
        "Il decespugliatore: per cespugli, rovi, punti difficili da raggiungere",
      description:
        'Il decespugliatore è una macchina che si presta per tagliare cespugli, falciare i rovi e tagliare le sterpaglie e l"erba alta in punti difficili da raggiungere, ad esempio lungo i fossi o a ridosso di muri, cordoli, tronchi di piante. Ci sono due sistemi di taglio: con due fili di nylon o con disco di taglio. Alcuni modelli permettono di scegliere il sistema di taglio più adatto di volta in volta in base al lavoro da svolgere. Il decespugliatore può essere elettrico, a batteria e a scoppio, a benzina o a miscela. Il suo motore si trova sul retro di un manico su cui sono poste due maniglie o un doppio manubrio.',
      url:
        "https://www.leroymerlin.it/prodotti/decespugliatori-CAT599-c?ruleFilter=FRULE1923446"
    },
    {
      id: 12,
      title: "Per le rifiniture, il tagliabordi",
      description:
        "Ora che hai tagliato il tuo prato con un tagliaerba, ti sarai accorto che ci sono dei punti in cui la macchina non riesce a ottenere un risultato perfetto. Infatti, per i lavori di finitura, come i cordoli e le aiuole, ti sarà di grande aiuto il tagliabordi. Il tagliabordi ha un motore nella parte inferiore del manico che aziona una bobina di filo di nylon. Questo taglia l’erba ruotando rapidamente. Anche in questo caso possono esserci macchine elettriche a filo, a batteria oppure a scoppio con motore a due tempi.",
      url:
        "https://www.leroymerlin.it/prodotti/tagliabordi-CAT600-c?sellingAidsFilter=SRULE4205"
    },
    {
      id: 13,
      title:
        "Il decespugliatore: per cespugli, rovi, punti difficili da raggiungere",
      description:
        'Il decespugliatore è una macchina che si presta per tagliare cespugli, falciare i rovi e tagliare le sterpaglie e l"erba alta in punti difficili da raggiungere, ad esempio lungo i fossi o a ridosso di muri, cordoli, tronchi di piante. Ci sono due sistemi di taglio: con due fili di nylon o con disco di taglio. Alcuni modelli permettono di scegliere il sistema di taglio più adatto di volta in volta in base al lavoro da svolgere. Il decespugliatore può essere elettrico, a batteria e a scoppio, a benzina o a miscela. Il suo motore si trova sul retro di un manico su cui sono poste due maniglie o un doppio manubrio.',
      url:
        "https://www.leroymerlin.it/prodotti/decespugliatori-CAT599-c?sellingAidsFilter=SRULE3624&ruleFilter=FRULE1923445"
    },
    {
      id: 14,
      title:
        "Il decespugliatore: per cespugli, rovi, punti difficili da raggiungere",
      description:
        'Il decespugliatore è una macchina che si presta per tagliare cespugli, falciare i rovi e tagliare le sterpaglie e l"erba alta in punti difficili da raggiungere, ad esempio lungo i fossi o a ridosso di muri, cordoli, tronchi di piante. Ci sono due sistemi di taglio: con due fili di nylon o con disco di taglio. Alcuni modelli permettono di scegliere il sistema di taglio più adatto di volta in volta in base al lavoro da svolgere. Il decespugliatore può essere elettrico, a batteria e a scoppio, a benzina o a miscela. Il suo motore si trova sul retro di un manico su cui sono poste due maniglie o un doppio manubrio.',
      url:
        "https://www.leroymerlin.it/prodotti/decespugliatori-CAT599-c?sellingAidsFilter=SRULE3625&ruleFilter=FRULE1923445"
    },
    {
      id: 15,
      title:
        "Il decespugliatore: per cespugli, rovi, punti difficili da raggiungere",
      description:
        'Il decespugliatore è una macchina che si presta per tagliare cespugli, falciare i rovi e tagliare le sterpaglie e l"erba alta in punti difficili da raggiungere, ad esempio lungo i fossi o a ridosso di muri, cordoli, tronchi di piante. Ci sono due sistemi di taglio: con due fili di nylon o con disco di taglio. Alcuni modelli permettono di scegliere il sistema di taglio più adatto di volta in volta in base al lavoro da svolgere. Il decespugliatore può essere elettrico, a batteria e a scoppio, a benzina o a miscela. Il suo motore si trova sul retro di un manico su cui sono poste due maniglie o un doppio manubrio.',
      url:
        "https://www.leroymerlin.it/prodotti/decespugliatori-CAT599-c?sellingAidsFilter=SRULE3623&ruleFilter=FRULE1923445"
    }
  ]
};

const URLS = {
  STORES:
    "https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/stores.json",
  WIZARD:
    "https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/wizard_config.json"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      steps: [],
      results: [],
      tree: undefined,
      complete: false,
      selectedAnswers: [],
      activeIndex: 0
    };
    this.submitChoice = this.submitChoice.bind(this);
    this.selectChip = this.selectChip.bind(this);

  }

  selectChip(chipIndex){
    const removedAnswers = this.state.selectedAnswers.slice(0,chipIndex)
      this.setState({
        activeIndex: chipIndex,
        selectedAnswers:removedAnswers
      })
      console.log(removedAnswers)
  }

  selectCard = i => {
    const { selectedAnswers, activeIndex } = this.state;
    selectedAnswers[activeIndex] = i;
    this.setState({
      selectedAnswers
    });
    console.log(selectedAnswers);
  };

  submitChoice() {
    const newActiveIndex = this.state.activeIndex + 1
    const completed = newActiveIndex >= this.state.steps.length;
    this.setState({
      activeIndex: newActiveIndex, completed
    });
  }

  componentDidMount() {
    axios
      .get(URLS.STORES)
      .then(r => r.data)
      .then(stores => {
        this.setState({
          stores
        });
        console.log(this.state.activeIndex);
      });

    axios.get(URLS.WIZARD).then(wizard => {
      this.setState({
        steps: WIZARD.steps,
        tree: WIZARD.tree,
        results: WIZARD.results

      });

    });
  }

  render() {
    const { activeIndex, steps, stores, selectedAnswers, tree, results, completed } = this.state;
    const currentSelection = selectedAnswers[activeIndex];
    const continueDisabled = typeof currentSelection !== "undefined";
    const treeResult = wizard.navigate(selectedAnswers, tree, steps.length);
    //console.log(wizard.navigate([1, 1, 0, 0], tree, 4))
    // const completed = true;

    console.log(selectedAnswers,tree, steps.length );
    console.log(treeResult);
    
    const currentStep = steps[activeIndex];

    const cardContainer = currentStep && !completed ? (
      <CardContainer
        selectCard={this.selectCard}
        answers={currentStep.answers}
        question = {currentStep.question}
      />
    ) : null;

    const resultsComponent =
      completed ? (
        <Results results={results}
          treeResult={treeResult} />)
        : null;

        const button =
        !completed
            ? (<Button
                onClick={this.submitChoice}
                isActive={continueDisabled}
              />
              )
            : null; 

    const options = stores.map(store => (
      <option key={store.storeCode} value={store.storeCode}>
        {store.storeName}
      </option>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-container">
          {/* CHIP CONTAINER */}
          <BreadCrumb activeIndex={activeIndex} selectChip = {this.selectChip} steps={steps}></BreadCrumb>

          <br />

          {/* CARDS CONTAINER  */}
          {cardContainer}

          <br />

          {/* BUTTON  */}
          <div className="zizzi">
          {button}
          </div>
        
              
          {/*  RESULTS */}
          {resultsComponent}

          {/* <select>{options}</select> */}
        </div>
      </div>
    );
  }
}

export default App;
