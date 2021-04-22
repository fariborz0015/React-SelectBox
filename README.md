# Getting Started with React Select search Box
This project was bootstrapped with React.js 

This project help to you for make a simple search box for own select elemnt in react projects
## Demo

![alt text](https://raw.githubusercontent.com/fariborz0015/React-SelectBox/master/public/selectbox.png)
## install 

Get Component by Githube:
```
 git clone https://github.com/fariborz0015/React-SelectBox.git
 
```
## Get single component
For get component singly after clone the project by git you can copy `SelectBox.js` in yours project component and if you want to have default styles you should copy `SelectBox.css` too,


### configs
#### set select element name
 ```

<SelectBox name={that name you want for select send by it }/>

```
#### setOptions
For Set your custom options in select box you should pass the an array of object to SelextBox component by `options={optionsArray}` ,

```

<SelectBox options={countries}/>

```
#### optionsTemplate
 Your options object should be looke like this object:

```
let optionsArray =[
    {
        label: `The text to be displayed`,
        value: The text to be send by selectbox `
        disabled:`if this property be true then this option will be disable `
    }
    ,...
]
```

- `label` is string
- `value` string or integer
- `disabled` boolean


#### searchable
if you want to enable searchMode  add true to searchable props 

```
 <SelectBox  searchable={true} />
    
```

also you can get searching value by searching props by a function that get value from

```
 <SelectBox  searchable={true} searching={str=>console.log(str)} />

```

#### placeholder option

```
<SelectBox   placeholderOption="your custom placeholder" />
```

####  resetable

if you want a button for reset the select box add the ` resetable={true}` in selectbox component

```
<SelectBox resetable={true} />
```


### Future features

  - make a multiselect mode 
  - propss for get options directly
  - and text me for your mind features....

 