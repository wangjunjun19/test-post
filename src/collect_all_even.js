
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
    var collection_c=[];
    for(var i=0;i<collection_a.length;i++)
    {
        for(var j=0;j<object_b.value.length;j++)
        {
            if(collection_a[i].key===object_b.value[j])
            {
                collection_c.push(collection_a[i].key);
            }
        }
    }
    return collection_c;
}

module.exports = collect_same_elements;
