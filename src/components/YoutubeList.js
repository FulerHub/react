import React, {useRef} from 'react';
import {useSelector} from "react-redux";
import {
    Tabs,
    Input,
    Button,
    Tooltip,
} from 'antd';
import { LikeOutlined, DislikeOutlined, CopyOutlined } from '@ant-design/icons';
import DownloadItem from "./DownloadItem";
const { TabPane } = Tabs;
const YoutubeList = () => {
    const Info = useSelector(state => state.appReducer.info)
    console.log('aa',Info)
    const textInputRef = useRef(null);
    if(!Info.items) return <p className={'result'}>No results</p>;
    const Item = Info.items[0]

    const newDate =  new Date(Item.snippet.publishedAt);
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
    };

    const copyToClipboard = (e) => {
        textInputRef.current.select();
        document.execCommand('copy');
        e.target.focus();
    };

    return (
        <div className={'result'}>
           {Item ? <>
               <br/>

               <div dangerouslySetInnerHTML={{__html: Item.player.embedHtml}} />

               <h2>{Item.snippet.title}</h2>
               <Input.Group compact>
                   <Input
                       ref={textInputRef}
                       style={{ width: 'calc(100% - 200px)' }}
                       defaultValue={Item.player.embedHtml}
                   />
                   <Tooltip title="copy git url">
                       <Button onClick={copyToClipboard} icon={<CopyOutlined />} />
                   </Tooltip>
               </Input.Group>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Статистика" key="1">
                        <h3><b>Кол-во просмотров: </b>{Item.statistics.viewCount} </h3>
                        <h3><b>Кол-во коментариев: </b>{Item.statistics.commentCount}</h3>
                        <h3><b>Likes: </b><LikeOutlined />{Item.statistics.likeCount}</h3>
                        <h3><b>Dislikes: </b><DislikeOutlined />{Item.statistics.dislikeCount}</h3>
                    </TabPane>
                    <TabPane tab="Описание" key="2">
                        <h3><b>Канал: </b>{Item.snippet.channelTitle}</h3>
                        <h3><b>Описание: </b>{Item.snippet.description}</h3>
                        <h3><b>Теги: </b>{Item.snippet.tags}</h3>
                        <h3><b>Опубликовано: </b>{newDate.toLocaleString("ru", options)}</h3>

                    </TabPane>

                    <TabPane tab="Другое" key="3">
                        <div className="images">
                            {Object.keys(Item.snippet.thumbnails).map((key) => <DownloadItem key={key} name={key} width={Item.snippet.thumbnails[key].width} height={Item.snippet.thumbnails[key].height} link={Item.snippet.thumbnails[key].url}/>)}
                        </div>
                       </TabPane>
               </Tabs>
            </> : "NO date"}
            <br/>

        </div>
    );
};

export default YoutubeList;