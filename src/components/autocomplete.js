import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';

// Instant Search Widgets
import { hits, searchBox, configure, refinementList, index, clearRefinements, voiceSearch } from 'instantsearch.js/es/widgets';

// Autocomplete Template
import autocompleteProductTemplate from '../templates/autocomplete-product';

// Connectors 
import { connectHits, connectRefinementList } from 'instantsearch.js/es/connectors';

/**
 * @class Autocomplete
 * @description Instant Search class to connect to Algolia and display content in the page's autocomplete
 */
class Autocomplete {
  /**
   * @constructor
   */
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Creates the search client and an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      'H3RQUJJGTV',
      'b2ba3b9a0371ef6ae80a4315b43efd18'
    );
// Connect to the newly created Spencer_Williams index which contains the products
    this._searchInstance = instantsearch({
      indexName: 'Spencer_Williams',
      indexId: 'products',
      searchClient: this._searchClient,
    });
  }

  

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      configure({
        hitsPerPage: 4,
      }),
      searchBox({
        // Place the search box on the DOM 
        container: '#searchbox',
        placeholder: 'Search for products',
        showReset: true,
        showLoadingIndicator: true,
      }),
      voiceSearch({
        // Place the voice search button on the DOM 
        container: '#voicesearch',
      }),
      refinementList({
        // Place the refinement list on the DOM 
        container: '#refinementList',
        // Make the refinement list display the different brands
        attribute: 'brand',
        // Show the show more button
        showMore: true,
      }),
      clearRefinements({
        // Place the clear refinements button on the DOM 
        container: '#clearRefinements',
      }),
      hits({
        // Place the hits on the DOM 
        container: '#products',
        // Get the hits template from the file "autocomplete-product.js"
        templates: { item: autocompleteProductTemplate },
      }),
      // Connect to the Spencer_Williams_query_suggestions index which contains the query suggestions, calculated by Algolias Analytics 
      index({
        indexName: 'Spencer_Williams_query_suggestions',
      }).addWidgets([
        configure({
          hitsPerPage: 16,
        }),
        QSHits({
          // Place the query suggestions on the DOM 
          container: '#suggestions',
        }),
      ]),
      federatedRefinement({
        // Make the federated refinement list display the different categories
        attribute: 'categories',
        // Place the categories on the DOM 
        container: '#categories',
        limit: 15,
      }),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

// Customize UI for the Query Suggestion Hits
const renderQSHits = ({ widgetParams, hits }, isFirstRender) => {
  const container = document.querySelector(widgetParams.container);

  container.innerHTML = `<ul>
    ${hits
      .map(
        (item) => `
        <li>${instantsearch.highlight({ hit: item, attribute: 'query' })}</li>
      `
      )
      .join('')}
  </ul>`;
};

const QSHits = connectHits(renderQSHits);

// Customize UI for the Federated List of Categories
const renderFederatedRefinement = ({ widgetParams, items }, isFirstRender) => {
  const container = document.querySelector(widgetParams.container);
  
  container.innerHTML = `<ul>
    ${items
      .map(
        (item) => `
        <li>${item.label}</li>
      `
      )
      .join('')}
  </ul>`;
 };
  
 const federatedRefinement = connectRefinementList(renderFederatedRefinement);


export default Autocomplete;
