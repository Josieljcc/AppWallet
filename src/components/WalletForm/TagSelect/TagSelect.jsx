import React from 'react';
import PropTypes from 'prop-types';

class TagSelect extends React.Component {
  render() {
    const { handleInput, tag } = this.props;
    return (
      <select
        name="tag"
        value={ tag }
        onChange={ handleInput }
        id="tag"
        data-testid="tag-input"
        className="select"
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    );
  }
}

TagSelect.propTypes = {
  handleInput: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

export default TagSelect;
