import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { COLORS } from '@/common';

const TagsContainer = styled.div`
  font-size: 12px;
`;
const Tag = styled.div`
  padding: 10px;
  display: inline-block;
  margin: 5px;
  border: 1px solid ${COLORS.GREY};
  border-radius: 3px;
`;

class Tags extends PureComponent {
  render() {
    const { 
      tags,
      noTagsMessage,
    } = this.props;

    const RenderTags = () => {
      if (tags.length) {
        return tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)
      }

      return <p>{noTagsMessage}</p>;
    }

    return (
      <TagsContainer>
        <RenderTags />
      </TagsContainer>
    );
  }
}

Tags.propTypes = {
  noTagsMessage: PropTypes.string,
  tags: PropTypes.array,
};

export default Tags;
