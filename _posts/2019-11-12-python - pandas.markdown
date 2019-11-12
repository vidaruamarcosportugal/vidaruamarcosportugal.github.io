---
layout: post
title:  "Python / Pandas Peripherical Brain"
date:   2015-10-01
categories: peripherical-brain
---

*This is a peripherical-brain test*
<br>

`last update: Nov.2019`

# `Python`

##### Create on the fly list for loop:
``` python
for info in df.column.unique().to_list():
     do stuff
```

##### Enumerate() for loop:
``` python
env_list = [responsive, ios, android]
env_name = ["responsive", "ios", "android"]
for idx, env in enumerate(env_list):
    current_date_name = 'df_{}_{}'.format(env_name[idx], current_date.replace('-', '_'))
    previous_date_name = 'df_{}_{}'.format(env_name[idx], previous_date.replace('-', '_'))
    print ('getting {} information for {}'.format(env_name[idx], current_date))

```
##### Python has a HTTP server built into the# standard library. This is super handy for# previewing websites.
##### Python 3.x
``` python
$ python3 -m http.server
```
##### Python 2.x
``` python
# (This will serve the current directory at#  http://localhost:8000)
$ python -m SimpleHTTPServer 8000
```

##### Backward range() 350 --> 0
``` python
range(350, 0, -1)
```

##### execute a python file in terminal
``` python
python filename.py
```

##### How to document a function
```python
def function():
     """ this function aims to..."""
function?
[output]
Docstring:
     """ this function aims to..."""
```

##### File concatenation and folder cleaning	
```python
os.system("sh /opt/insight-repositories/pyLBC/reporting/concat_and_clean.sh " + current_date_name)
```

##### [Daily global retention](https://gist.github.com/Evryjazz/c426f9c2ecf5be5708aa5186f9a671c9)

##### [List comprehension](https://chrisalbon.com/python/data_wrangling/pandas_list_comprehension/)

##### Loop over a date range and get first and last day of the week (or the month with rrule.MONTHLY)
```python 
from datetime import datetime, timedelta, date
from dateutil import rrule

start = date(2018, 11, 5) 
end = date(2018, 11, 19)

for dt in rrule.rrule(rrule.WEEKLY, dtstart=start, until=end):
    start_date = dt.date()
    end_date = start_date + timedelta(6)
    
    print(start_date)
    print(end_date)
```

---
##### .format() method for variable: [Template Strings](https://realpython.com/python-string-formatting/)
```python
from string import Template
name = 'Bob'
t = Template('Hey, $name!')
t.substitute(name=name)
>>> 'Hey, Bob!'
```

---
##### [yesterday](https://stackoverflow.com/questions/30483977/python-get-yesterdays-date-as-a-string-in-yyyy-mm-dd-format/30484112)
```python
from datetime import datetime, timedelta
yesterday = datetime.strftime(datetime.now() - timedelta(1), '%Y-%m-%d')
```

---
---


# `Pandas`  

- [Enthought Python Pandas Cheat Sheets](https://www.evernote.com/shard/s24/res/7561ff62-c921-4ab6-9189-9d8993d6b32c)
- [Best intro ever](https://www.youtube.com/watch?v=5JnMutdy6Fw)
- [StackOverflow Favorites](https://stackoverflow.com/users/2505731/julienzanni?tab=favorites)


##### groupby nomenclature
``` python 
df[['metric_1', 'metric_2’]].groupby('df.dimension_1', 'df.dimension_2').df_metrics.mean()
```
---
##### Put index as column
```python
df.reset_index(inplace=True)
```
---
##### Append data to csv with mode="a"
```python
# create tmp dataframe
data_tmp = {'retention': retention, 'platform' : env_name[idx]}
df_tmp = pd.DataFrame(index=[current_date], data=data_tmp)
# append date and retention value to the csv
df_tmp.to_csv('daily_retention.csv', mode='a', header=False)
```
---
##### How to handle automation date with manual date capability     
```python
# date
if len(sys.argv) > 1:
    ref_date = toStrDateIso(sys.argv[1])
else:
    ref_date = date.today()
current_date = toStrDateIso(ref_date + timedelta(days = -2))
previous_date = toStrDateIso(ref_date + timedelta(days = -3))
```
---
##### Jupyter notebook best pratices
* read_clipboard option pour grapher rapidement
* Best practice in order to load xiti request (and come back to it) :
* df = xiti_get_results_parallel_page(sub_request_2, path_to_write, request_name, user, password)
* df.to_csv(path_to_write + 'file name')
* df_meaning = pd.read_csv(path_to_write + 'file name' )

---
##### How to load csv files and interpreting: date + decimal with comma instead of dot
```python
df_data = pd.read_csv("/path/file.csv", sep=";", parse_dates=True, decimal=",")
or df_data = pd.read_csv("/path/file.csv", parse_dates=['col1', 'col2'])
```
---
##### Index manipulation
- `set_index` > moves columns to left index
- `reset_index` > moves the index to the right out of index
- `unstack` moves line to the top index ('up’) / stack 
---

##### Most efficient way to select part of a data frame
```python 
df.set_index(['a', 'b']).sort_index()
df.loc[('v','u')]
```
##### How to add thousand separator to a .plot() graph
```python
ax = plt.gca()
ax.get_yaxis().set_major_formatter(plt.FuncFormatter(lambda x, loc: "{:,}".format(int(x))))
```
---

##### Merge on right and left index
```python
df_global = pd.merge(df_1, df_2, left_index=True, right_index=True)
```
---
##### When importing csv, make sure dd/mm/yyyy object format translate in yyy-mm-dd datetime object
```python
df = pd.read_csv()
df.column_date = pd.to_datetime(df.column_date, format='%d/%m/%Y')
```
---
##### Drop a specific column
```python
del df['column_name']
```
---
##### Aggregate on specific column and get a dataframe (double brackets)
```python
df.groupby('column_name')[['column_name']].count()
```
##### Aggregate on specific column and get a serie (single bracket)
```python
df.groupby('column_name')['column_name'].count()
```
---
##### Methods to rename columns
```python
column_names = {
     ‘col_name_1’ : ‘new_col_1’,
     [...]
}
pd.rename(column=column_names, inplace = True)
```
or
```python
df.column(‘new_col_1’, […])
or for one specific columns (and more if needed)
df = df.rename(columns=({'col_name' : 'new_col_name'}))
```
but best method
```python
df.columns = ['col_1', 'col_2', ...]
```
---
##### Convert specific column in datetime object (time consuming method)
```python 
df.column_date = pd.to_datetime(df.column_date)
```
In order to improve it, specify format!
```python
df.column_date = pd.to_datetime(df.column_date, format="%Y-%m-%d")
```
---
##### how to use different agg method in the same groupby
```python 
df.groupby('col1').agg({'col2' : 'count', 'col3' : 'sum'})
```

##### how to return the number of unique element of a serie
```python
df.col.nunique()
```
---
##### From an object column containing number, clean '-' and convert it to int (with pandas version 0.17)
```python
df.ad_price = df.ad_price.replace({'-' : 0})
df.ad_price = pd.to_numeric(df.ad_price)
```
##### From an object column containing number, replace ',' with '.'
```python
df.ca_ht.str.replace(',' , '.') # use the comma!
```
---
##### get column percentage occurencies  / number
```python
df.col.value_counts(normalize=True)/ df.col.value_counts(normalize=False) or df.col.value_counts()
``` 
---
##### Filter datetime columns that have X days in difference 
```python
df[df.col_datetime1 - df.col_datetime2 <= 'X days']
```
---
##### int64 serie to object
```python
df.int_col = df.int_col.apply(str)
```
---
##### Filter values of a column based on conditions from another set of columns
```python
df.loc[(df["Gender"]=="Female") & (df["Education"]=="Not Graduate") & (df["Loan_Status"]=="Y"), ["Gender","Education","Loan_Status"]]
df.loc[(df.user_weight == 'big') | (df.user_weight == 'medium') & (df.user_type == 'browsers')]
# must use | & not or and
```
##### How to easily get same week day y-1
52*7 = 364
day n - 364 = same week day y-1

---
##### Skip first raw when importing excel
```python
df_3 = pd.read_excel('contact_3.xlsx', skiprows=1)
```
---
#### Find any text between '<' and '>
```python
import re
text = '<me@email.com>'
re.findall(r'<(.*?)>', text)
```
---
##### YOY evolution over time
```python
df.resample('M')[['metric ']].sum().pct_change(12)
```
---
##### Datetime format apply the format and allow us to manipulate it as we want after!

```python
df_data.Date = pd.to_datetime(df_data.Date, format="%d/%m/%Y")    
```
---
##### Handy matplotlib funtions to get thousands or percentage
```python
def plt_thousand():
    # avoid scientific thousand notation + add comma between thousands for better readability
    ax = plt.gca()
    ax.get_yaxis().set_major_formatter(plt.FuncFormatter(lambda x, loc: "{:,}".format(int(x))))

def plt_percentage(df):
    # transform ylabel decimal in percentage
    ax = df
    ax.yaxis.set_major_formatter(FuncFormatter(lambda y, _: '{:.0%}'.format(y)))
```
---
##### No index column when creating a csv
```python
df.to_csv('my_csv.csv', sep=';', index=False)
```
---
##### How to read files in a folder
```python
import os
os.listdir(os.curdir)
```
---
##### Delete several columns (will delete columns 1, 7, 9, 10, 11)
```python
df = df.drop(df.columns[[1, 7, 9, 10, 11]], axis=1)
```
---
##### Split column text with an argument _and_ select the second part of the split
```python
df['str_obj_column'] = df['str_obj_column'].str.split('argument', expand=True)[1]
```
---
##### renaming multiple columns
```python
df.columns = ['colunm_1_name', ..., 'column_n_name']
```
---
##### index to datetime
```python
df.index = pd.to_datetime(df.index)
```
---
##### insert image in text cell
```python
![title](img/image.png)
```
---
##### remove the first blank row when assigning index (this is caused by the name assigned to the index)
```python
df.index.name=None
```

##### for loops to concat df
```python
list_nb = ['0', '1', '2']
for i in list_nb:
    if i == '0':
        data_agg = pd.DataFrame(data=data)
    else:
        data_agg = data_agg.append(data, ignore_index=True)
or
list_nb = ['0', '1', '2']
for idx, i in enumerate(list_nb):
    if idx == 0:
        data_agg = pd.DataFrame(data=data)
    else:
        data_agg = data_agg.append(data)
```
---
##### How to create a new empty dataframe
```python
df = pd.DataFrame()
```
---
##### How to calculate % of grouped df
```python
grouped_df = grouped_df.groupby('desired_column').apply(lambda x: x/x.sum() *100)
# (or float(x.sum()) )
```
---
##### how to calculate D3/D1 % from a multiIndex DF?
```python
df['d3vsd1'] =  df[df.columns[1]] / df[df.columns[0]] *100
df['d3vsd1'].plot(figsize=(15,8))
# > use df.columns[level] !
```
---
##### how to sort df by a specific column
```python
df = df.sort_values('column_to_sort')
```
---
##### When returning a dataframe from a function, we need to assign it to a variable in order to use it
```python
def function():
    do things
     return df
df_var = function()
```
---
##### reload packages without restarting the kernel
```python
%reload_ext autoreload
%autoreload 2
```
---
##### [Flatten hierarchical index in columns](https://stackoverflow.com/questions/14507794/pandas-how-to-flatten-a-hierarchical-index-in-columns)
```python
df.columns = df.columns.get_level_values(0)
# or
pd.DataFrame(df.to_records()) # multiindex become columns
```
---
##### Combine multiple index into one index
```python
df.columns = [' '.join(col).strip() for col in df.columns.values]
# even better:
pd.DataFrame(df.to_records()) # multiindex become columns and new index is integers only
```
---
##### How to reference a link to another cell
```python
[link to the cell](#name-of-the-markdown-cell)
```
---
### Selection
##### To select rows whose column value equals a scalar, some_value, use ==:
```python
df.loc[df['column_name'] == some_value]
```
##### To select rows whose column value is in an iterable, some_values, use isin:
```python
df.loc[df['column_name'].isin(some_values)]
```
##### Combine multiple conditions with &:
```python
df.loc[(df['column_name'] == some_value) & df['other_column'].isin(some_values)]
```
##### To select rows whose column value does not equal some_value, use !=:
```python
df.loc[df['column_name'] != some_value]
```
##### isin returns a boolean Series, so to select rows whose value is not in some_values, negate the boolean Series using `~`:
```python
df.loc[~df['column_name'].isin(some_values)]
```
---
##### UnicodeDecodeError when reading CSV file > ‘ISO-8859-1' is the solution
```python
df = pd.read_csv('file.csv', sep=';', encoding = 'ISO-8859-1')
```
---
##### How to put last column first
```python
cols = list(df.columns)
cols = [cols[-1]] + cols[:-1]
df = df[cols]
```
---
##### How to replace negative value with 0 (clip / clip_lower)
```python
df[['neg_col_1', 'neg_col_2']] = df[['neg_col_1', 'neg_col_2']].clip_lower(0)
```
---
##### How to keep only date from datetime full format (dt.date)
```python
df.d_time_date = df.d_time_date.dt.date
```
---
##### Set graph size when starting a new notebook
```python
plt.rcParams['figure.figsize'] = (17, 5)
```
---
##### How to create a Y-1 column? With .shift(364) !
```python
df['visits_y1'] = df.visits.shift(364)
```
---
##### .plot() line width 
```python
df.plot(lw=1)
```
---
##### [Iterating through a range of dates in Python](https://stackoverflow.com/questions/1060279/iterating-through-a-range-of-dates-in-python)
```python
from datetime import timedelta, date

def daterange(start_date, end_date):
    for n in range(int ((end_date - start_date).days)):
        yield start_date + timedelta(n)

start_date = date(2013, 1, 1)
end_date = date(2015, 6, 2)
for single_date in daterange(start_date, end_date):
    print(single_date.strftime("%Y-%m-%d"))

```

---
> WIP
* CoolStuffILearn - unix / bash
* CoolStuffILearn - SQL
