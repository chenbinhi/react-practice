import React, { Component } from 'react'
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc'

import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
import ActionGrade from 'material-ui/svg-icons/action/grade';

import MobileTearSheet from './MobileTearSheet'


const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
)

const SortHandler = SortableHandle(() => <FontIcon className='material-icons'>drag_handle</FontIcon>)
const SortElement = SortableElement(({ value, seq }) => (<ListItem
    primaryText={ value }
    leftIcon={  <span style={ { cursor: "move" } }><SortHandler /></span>  }
    rightIconButton={rightIconMenu}
    value={ seq }
    onTouchTap={ e => alert('ListItem') }
    />))

let SelectableList = makeSelectable(List)

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    // static propTypes = {
    //   children: PropTypes.node.isRequired,
    //   defaultValue: PropTypes.number.isRequired,
    // };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      })
    }

    handleRequestChange(event, index) {
      this.setState({
        selectedIndex: index,
      })
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      )
    }
  }
}

SelectableList = wrapState(SelectableList)

const SortContainer = SortableContainer(({ items }) => <SelectableList onChange={ e => alert('SelectableList') } >
    {
        items.map((value, index) =>
                <SortElement key={index} index={index} value={value} seq={index} onTouchTap={ e => alert('SortElement') }/>)
    }
</SelectableList>)

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}


class Control extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6']
        }
        this.onSortEnd = this.onSortEnd.bind(this)
    }
    
    onSortEnd({ oldIndex, newIndex }) {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex)
        })
    }
    render() {
        return  <div style={styles.root}>
            <MobileTearSheet height={500}>
                <Subheader>球桌1秩序册</Subheader>
                <SortContainer items={this.state.items} hideSortableGhost={true} onSortEnd={this.onSortEnd}  useDragHandle={true} />
            </MobileTearSheet>
            <MobileTearSheet height={500}>
                <Subheader>球桌2秩序册</Subheader>
                <SortContainer items={this.state.items} hideSortableGhost={true} onSortEnd={this.onSortEnd} useDragHandle={true} lockAxis='y' lockToContainerEdges={true} />
            </MobileTearSheet>
        </div>
    }
}

export default Control

