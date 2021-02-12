import {useEffect, useState} from 'react';
import {createId} from './lib/createId';
import {useUpdate} from './hooks/useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {window.localStorage.setItem('tags', JSON.stringify(tags));}, [tags]);
  const findTag = (id: number) => {return tags.filter(tag => tag.id === id)[0]; };
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
      }
    }
    return result;
  };
  const addTag = () => {
    const name = window.prompt('请输入标签名');
    if (name) {
      setTags([...tags, {id: createId(), name: name}]);
    }
  };
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id: id, name: obj.name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  return {tags, setTags, findTag, findTagIndex, addTag, updateTag, deleteTag};
};
export {useTags};