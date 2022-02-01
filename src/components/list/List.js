import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./List.scss";
import {Images} from '../../demoData'

const List = () => {
      const [isMoved , setIsMoved] = useState(false)
      const [sliderNumber , setSliderNumber] = useState(0)
      const listRef = useRef();

      const handleClick = (direction) => {
            setIsMoved(true)
            let distance = listRef.current.getBoundingClientRect().x - 50
            if(direction === "left" && sliderNumber > 0) {
                  setSliderNumber(sliderNumber - 1)
                  listRef.current.style.transform = `translateX(${230 + distance}px)`
            }
            if(direction === "right" && sliderNumber < 5) {
                  setSliderNumber(sliderNumber + 1)
                  listRef.current.style.transform = `translateX(${-230 + distance}px)`
            }
      }
	console.log(Images);
	return (
		<div className="list">
			<span className="listTitle">Continue to watch</span>
			<div className="wrapper">
				<ArrowBackIosOutlined 
                              className="sliderArrow left" 
                              onClick={() => handleClick("left")}
                              style={{display : !isMoved && "none"}}
                        />
				<div className="container" ref={listRef}>
					{
						Images.map( items => (
							<ListItem key={items.id} items ={items}/>
						))
					}
					{/* <ListItem index={0} images ={Images}/>
					<ListItem index={1} images ={Images}/>
					<ListItem index={2} images ={Images}/>
					<ListItem index={3} images ={Images}/>
					<ListItem index={4} images ={Images}/>
					<ListItem index={5} images ={Images}/>
					<ListItem index={6} images ={Images}/>
					<ListItem index={7} images ={Images}/>
					<ListItem index={8} images ={Images}/>
					<ListItem index={9} images ={Images}/> */}
				</div>
				<ArrowForwardIosOutlined 
                              className="sliderArrow right"
                              onClick={() => handleClick("right")}
                        />
			</div>
			{/* <div className="line"></div> */}
		</div>
	);
};

export default List;
