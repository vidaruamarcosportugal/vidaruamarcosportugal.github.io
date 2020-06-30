---
layout: post
title:  "Python / Pandas"
date:   2015-10-01
categories: peripherical-brain
---

*I'm a product data analyst (currently working for [leboncoin.fr](http://leboncoin.fr)). <br>
This is my peripherical-brain for `python` / `pandas`, it's not exhaustive, but I try to update it with cool stuff I learned along the way.*


`Started: ~2015`<br>
`Last Update: 2020.04`
<br>
<br>



<!-- **vocabulario**{: style="background-color:#FFEF9E"} <br>
**sentenças**{: style="background-color:#FEC1D0"} <br>
**vocabulario**{: style="background-color:#ADECF4"} <br>
**vocabulario**{: style="background-color:#B7F7D1"} <br>
**traduction**{: style="background-color:#c9c9c9"} <br> -->


# **Python** 🐍 

**Ressources**{: style="background-color:#FFEF9E"}
- [Beyond PEP8 -  Best practices for beautiful intelligible code](https://www.youtube.com/watch?v=wf-BqAjZb8M&feature=emb_title) → very useful tips, thanks [ryx,r](https://ryxcommar.com/2019/10/24/how-i-learned-python/)
- [→ ressources list](https://github.com/Evryjazz/learning_by_doing)
- [Daily global retention](https://gist.github.com/Evryjazz/c426f9c2ecf5be5708aa5186f9a671c9)
- [List comprehension](https://chrisalbon.com/python/data_wrangling/pandas_list_comprehension/)

<br>
<a style='color:#e6e6e6;'>___</a>
<br>

<br>
**Create on the fly list for loop:**{: style="background-color:#FEC1D0"} <br>

``` python
for info in df.column.unique().to_list():
     do stuff
```
<br>

**Enumerate() for loop:**{: style="background-color:#FEC1D0"} <br>

``` python
env_list = [responsive, ios, android]
env_name = ["responsive", "ios", "android"]
for idx, env in enumerate(env_list):
    current_date_name = 'df_{}_{}'.format(env_name[idx], current_date.replace('-', '_'))
    previous_date_name = 'df_{}_{}'.format(env_name[idx], previous_date.replace('-', '_'))
    print ('getting {} information for {}'.format(env_name[idx], current_date))

```
<br>

**Python has a HTTP server built into the# standard library. This is super handy for# previewing websites.**{: style="background-color:#FEC1D0"} <br>
**Python 3**{: style="background-color:#FEC1D0"} <br>
``` python
$ python3 -m http.server
```
<br>

**Python 2**{: style="background-color:#FEC1D0"} <br>

``` python
# (This will serve the current directory at#  http://localhost:8000)
$ python -m SimpleHTTPServer 8000
```
<br>

**Backward range() 350 --0**{: style="background-color:#FEC1D0"} <br>

``` python
range(350, 0, -1)
```
<br>

**Execute a python file in terminal**{: style="background-color:#FEC1D0"} <br>

``` python
python filename.py
```
<br>

**How to document a function**{: style="background-color:#FEC1D0"} <br>

```python
def function():
     """ this function aims to..."""
function?
[output]
Docstring:
     """ this function aims to..."""
```
<br>

**File concatenation and folder cleaning**{: style="background-color:#FEC1D0"} <br>

```python
os.system("sh /opt/insight-repositories/pyLBC/reporting/concat_and_clean.sh " + current_date_name)
```
<br>

**Loop over a date range and get first and last day of the week (or the month with rrule.MONTHLY)**{: style="background-color:#FEC1D0"} <br>

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
<br>

**.format() method for variable: [Template Strings](https://realpython.com/python-string-formatting/)**{: style="background-color:#FEC1D0"} <br>

```python
from string import Template
name = 'Bob'
t = Template('Hey, $name!')
t.substitute(name=name)
>>'Hey, Bob!'
```
<br>

**[yesterday](https://stackoverflow.com/questions/30483977/python-get-yesterdays-date-as-a-string-in-yyyy-mm-dd-format/30484112)**{: style="background-color:#FEC1D0"} <br>

```python
from datetime import datetime, timedelta
yesterday = datetime.strftime(datetime.now() - timedelta(1), '%Y-%m-%d')
```
<br>

**How to easily get same week day y-1**{: style="background-color:#FEC1D0"} <br>

```
52*7 = 364
day n - 364 = same week day y-1
```
<br>

**[Iterating through a range of dates in Python](https://stackoverflow.com/questions/1060279/iterating-through-a-range-of-dates-in-python)**{: style="background-color:#FEC1D0"} <br>

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
<br>

**Find any text between '<' and '>**{: style="background-color:#FEC1D0"} 

```python
import re
text = '<me@email.com>'
re.findall(r'<(.*?)>', text)
```

<br>
<br>
---
<br>
<br>

# **Pandas** 🐼

**Ressources**{: style="background-color:#FFEF9E"}
- [Brandon Rhodes: Pandas From The Ground Up _(PyCon 2015)_](https://www.youtube.com/watch?v=5JnMutdy6Fw) = Best intro ever 🙏
- [StackOverflow Favorites](https://stackoverflow.com/users/2505731/julienzanni?tab=favorites)

<br>

**groupby nomenclature**{: style="background-color:#B7F7D1"}

``` python 
df[['metric_1', 'metric_2’]].groupby('df.dimension_1', 'df.dimension_2').df_metrics.mean()
```
<br>

**Put index as column**{: style="background-color:#B7F7D1"}

```python
df.reset_index(inplace=True)
```
<br>

**Append data to csv with mode="a"**{: style="background-color:#B7F7D1"}

```python
# create tmp dataframe
data_tmp = {'retention': retention, 'platform' : env_name[idx]}
df_tmp = pd.DataFrame(index=[current_date], data=data_tmp)
# append date and retention value to the csv
df_tmp.to_csv('daily_retention.csv', mode='a', header=False)
```
<br>

**How to handle automation date with manual date capability**{: style="background-color:#B7F7D1"}

```python
# date
if len(sys.argv) 1:
    ref_date = toStrDateIso(sys.argv[1])
else:
    ref_date = date.today()
current_date = toStrDateIso(ref_date + timedelta(days = -2))
previous_date = toStrDateIso(ref_date + timedelta(days = -3))
```

<br>

**How to load csv files and interpreting: date + decimal with comma instead of dot**{: style="background-color:#B7F7D1"}

```python
df_data = pd.read_csv("/path/file.csv", sep=";", parse_dates=True, decimal=",")
or df_data = pd.read_csv("/path/file.csv", parse_dates=['col1', 'col2'])
```
<br>

**Index manipulation**{: style="background-color:#B7F7D1"}
- `set_index` moves columns to left index
- `reset_index` moves the index to the right out of index
- `unstack` moves line to the top index ('up’) / stack 

<br>

**Most efficient way to select part of a data frame**{: style="background-color:#B7F7D1"}

```python 
df.set_index(['a', 'b']).sort_index()
df.loc[('v','u')]
```
<br>

**How to add thousand separator to a .plot() graph**{: style="background-color:#B7F7D1"}

```python
ax = plt.gca()
ax.get_yaxis().set_major_formatter(plt.FuncFormatter(lambda x, loc: "{:,}".format(int(x))))
```
<br>

**Merge on right and left index**{: style="background-color:#B7F7D1"}

```python
df_global = pd.merge(df_1, df_2, left_index=True, right_index=True)
```
<br>

**When importing csv, make sure dd/mm/yyyy object format translate in yyy-mm-dd datetime object**{: style="background-color:#B7F7D1"}

```python
df = pd.read_csv()
df.column_date = pd.to_datetime(df.column_date, format='%d/%m/%Y')
```
<br>

**Drop a specific column**{: style="background-color:#B7F7D1"}

```python
del df['column_name']
```
<br>

**Aggregate on specific column and get a dataframe (double brackets)**{: style="background-color:#B7F7D1"}

```python
df.groupby('column_name')[['column_name']].count()
```
<br>

**Aggregate on specific column and get a serie (single bracket)**{: style="background-color:#B7F7D1"} 

```python
df.groupby('column_name')['column_name'].count()
```
<br>

**Methods to rename columns**{: style="background-color:#B7F7D1"} 

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
<br>

**Convert specific column in datetime object (time consuming method)**{: style="background-color:#B7F7D1"} 

```python 
df.column_date = pd.to_datetime(df.column_date)
```
In order to improve it, specify format!
```python
df.column_date = pd.to_datetime(df.column_date, format="%Y-%m-%d")
```
<br>

**How to use different agg method in the same groupby**{: style="background-color:#B7F7D1"} 

```python 
df.groupby('col1').agg({'col2' : 'count', 'col3' : 'sum'})
```
<br>

**how to return the number of unique element of a serie**{: style="background-color:#B7F7D1"} 

```python
df.col.nunique()
```
<br>

**From an object column containing number, clean '-' and convert it to int (with pandas version 0.17)**{: style="background-color:#B7F7D1"} 

```python
df.ad_price = df.ad_price.replace({'-' : 0})
df.ad_price = pd.to_numeric(df.ad_price)
```
<br>


**From an object column containing number, replace ',' with '.'**{: style="background-color:#B7F7D1"} 

```python
df.ca_ht.str.replace(',' , '.') # use the comma!
```
<br>

**Get column percentage occurencies  / number**{: style="background-color:#B7F7D1"} 

```python
df.col.value_counts(normalize=True)/ df.col.value_counts(normalize=False) or df.col.value_counts()
``` 
<br>

**Filter datetime columns that have X days in difference**{: style="background-color:#B7F7D1"} 

```python
df[df.col_datetime1 - df.col_datetime2 <= 'X days']
```
<br>

**int64 serie to object**{: style="background-color:#B7F7D1"} 

```python
df.int_col = df.int_col.apply(str)
```
<br>

**Filter values of a column based on conditions from another set of columns**{: style="background-color:#B7F7D1"} 

```python
df.loc[(df["Gender"]=="Female") & (df["Education"]=="Not Graduate") & (df["Loan_Status"]=="Y"), ["Gender","Education","Loan_Status"]]
df.loc[(df.user_weight == 'big') | (df.user_weight == 'medium') & (df.user_type == 'browsers')]
# must use | & not or and
```
<br>

**Skip first raw when importing excel**{: style="background-color:#B7F7D1"} 

```python
df_3 = pd.read_excel('contact_3.xlsx', skiprows=1)
```
<br>

**YOY evolution over time**{: style="background-color:#B7F7D1"} 

```python
df.resample('M')[['metric ']].sum().pct_change(12)
```
<br>

**Datetime format apply the format and allow us to manipulate it as we want after!**{: style="background-color:#B7F7D1"} 

```python
df_data.Date = pd.to_datetime(df_data.Date, format="%d/%m/%Y")    
```
<br>

**Handy matplotlib funtions to get thousands or percentage**{: style="background-color:#B7F7D1"} 

```python
def plt_thousand():
    # avoid scientific thousand notation + add comma between thousands for better readability
    ax = plt.gca()
    ax.get_yaxis().set_major_formatter(plt.FuncFormatter(lambda x, loc: "{:,}".format(int(x))))

def plt_percentage(df):
    # transform ylabel decimal in percentage
    ax = df
    ax.yaxis.set_major_formatter(FuncFormatter(lambda y, _: '{:.0%}'.format(y)))

# or (↓ might be a better option) 

def plt_percentage():
    # transform ylabel decimal in percentage
    ax = plt.gca()
    ax.get_yaxis().set_major_formatter(plt.FuncFormatter(lambda y, _: '{:.0%}'.format(y)))
```
<br>

**No index column when creating a csv**{: style="background-color:#B7F7D1"} 

```python
df.to_csv('my_csv.csv', sep=';', index=False)
```
<br>

**How to read files in a folder**{: style="background-color:#B7F7D1"} 

```python
import os
os.listdir(os.curdir)
```
<br>

**Delete several columns (will delete columns 1, 7, 9, 10, 11)**{: style="background-color:#B7F7D1"} 

```python
df = df.drop(df.columns[[1, 7, 9, 10, 11]], axis=1)
```
<br>

**Split column text with an argument _and_ select the second part of the split**{: style="background-color:#B7F7D1"} 

```python
df['str_obj_column'] = df['str_obj_column'].str.split('argument', expand=True)[1]
```
<br>

**Renaming multiple columns**{: style="background-color:#B7F7D1"} 

```python
df.columns = ['colunm_1_name', ..., 'column_n_name']
```
<br>

**Index to datetime**{: style="background-color:#B7F7D1"} 

```python
df.index = pd.to_datetime(df.index)
```
<br>

**Insert image in text cell**{: style="background-color:#B7F7D1"} 

```python
![title](img/image.png)
```
<br>

**Remove the first blank row when assigning index (this is caused by the name assigned to the index)**{: style="background-color:#B7F7D1"} 

```python
df.index.name=None
```
<br>

**For loops to concat df**{: style="background-color:#B7F7D1"} 

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
<br>

**How to create a new empty dataframe**{: style="background-color:#B7F7D1"} 

```python
df = pd.DataFrame()
```
<br>

**How to calculate % of grouped df**{: style="background-color:#B7F7D1"} 

```python
grouped_df = grouped_df.groupby('desired_column').apply(lambda x: x/x.sum() *100)
# (or float(x.sum()) )
```
<br>

**How to calculate D3/D1 % from a multiIndex DF?**{: style="background-color:#B7F7D1"} 

```python
df['d3vsd1'] =  df[df.columns[1]] / df[df.columns[0]] *100
df['d3vsd1'].plot(figsize=(15,8))
# use df.columns[level] !
```
<br>

**How to sort df by a specific column**{: style="background-color:#B7F7D1"} 

```python
df = df.sort_values('column_to_sort')
```
<br>

**When returning a dataframe from a function, we need to assign it to a variable in order to use it**{: style="background-color:#B7F7D1"} 

```python
def function():
    do things
     return df
df_var = function()
```
<br>

**Reload packages without restarting the kernel**{: style="background-color:#B7F7D1"} 

```python
%reload_ext autoreload
%autoreload 2
```
<br>

**[Flatten hierarchical index in columns](https://stackoverflow.com/questions/14507794/pandas-how-to-flatten-a-hierarchical-index-in-columns)**{: style="background-color:#B7F7D1"} 

```python
df.columns = df.columns.get_level_values(0)
# or
pd.DataFrame(df.to_records()) # multiindex become columns
```
<br>


**Combine multiple index into one index**{: style="background-color:#B7F7D1"} 
```python
df.columns = [' '.join(col).strip() for col in df.columns.values]
# even better:
pd.DataFrame(df.to_records()) # multiindex become columns and new index is integers only
```
<br>

**How to reference a link to another cell**{: style="background-color:#B7F7D1"} 

```python
[link to the cell](#name-of-the-markdown-cell)
```
<br>

<a style='color:#e6e6e6;'>___</a>

### **Selection**
**To select rows whose column value equals a scalar, some_value, use ==:**{: style="background-color:#B7F7D1"} 

```python
df.loc[df['column_name'] == some_value]
```
<br>

**To select rows whose column value is in an iterable, some_values, use isin:**{: style="background-color:#B7F7D1"} 

```python
df.loc[df['column_name'].isin(some_values)]
```
<br>

**Combine multiple conditions with &:**{: style="background-color:#B7F7D1"} 

```python
df.loc[(df['column_name'] == some_value) & df['other_column'].isin(some_values)]
```
<br>

**To select rows whose column value does not equal some_value, use !=:**{: style="background-color:#B7F7D1"} 

```python
df.loc[df['column_name'] != some_value]
```
<br>

**isin returns a boolean Series, so to select rows whose value is not in some_values, negate the boolean Series using `~`:**{: style="background-color:#B7F7D1"} 

```python
df.loc[~df['column_name'].isin(some_values)]
```
<br>
<a style='color:#e6e6e6;'>___</a>
<br>

**UnicodeDecodeError when reading CSV file ‘ISO-8859-1' is the solution**{: style="background-color:#B7F7D1"} 

```python
df = pd.read_csv('file.csv', sep=';', encoding = 'ISO-8859-1')
```
<br>

**How to put last column first**{: style="background-color:#B7F7D1"} 

```python
cols = list(df.columns)
cols = [cols[-1]] + cols[:-1]
df = df[cols]
```
<br>

**How to replace negative value with 0 (clip / clip_lower)**{: style="background-color:#B7F7D1"} 

```python
df[['neg_col_1', 'neg_col_2']] = df[['neg_col_1', 'neg_col_2']].clip_lower(0)
```
<br>

**How to keep only date from datetime full format (dt.date)**{: style="background-color:#B7F7D1"} 

```python
df.d_time_date = df.d_time_date.dt.date
```
<br>

**Set graph size when starting a new notebook**{: style="background-color:#B7F7D1"} 

```python
plt.rcParams['figure.figsize'] = (17, 5)
```
<br>

**How to create a Y-1 column? With .shift(364) !**{: style="background-color:#B7F7D1"} 

```python
df['visits_y1'] = df.visits.shift(364)
```
<br>

**.plot() line width**{: style="background-color:#B7F7D1"} 

```python
df.plot(lw=1)
```
<br>

**[How to sort a multi-index](https://stackoverflow.com/questions/14733871/multi-index-sorting-in-pandas#)**{: style="background-color:#B7F7D1"} 

```python
df.sort_values([('level_0', 'level_1')], ascending=False)
```
<br>

**Group by on index level**{: style="background-color:#B7F7D1"} 

```python
df.groupby(level=0).sum()
```
<br>

**Retention - Color scoping vmin/vmax + fix graph**{: style="background-color:#B7F7D1"} 

```python
import seaborn as sns
#sns.set(style='white')
plt.figure(figsize=(15, 8))
plt.title('Cohorts: weekly Buyers Retention')
ax = sns.heatmap(weekly_buyer_retention, mask=weekly_buyer_retention.isnull(), annot=True, fmt='.0%', vmin=0, vmax=0.15);

# fix the wrong diplay
bottom, top = ax.get_ylim()
ax.set_ylim(bottom + 0.5, top - 0.5)
plt.yticks(rotation='horizontal')
```

<br>

**Function on several columns with .loc**{: style="background-color:#B7F7D1"} 
![](/assets/photos/pandas_function_on_columns.jpg){:class="img-responsive"}

<br>

**Pandas Plot - Rotate X Axis**{: style="background-color:#B7F7D1"} 

```python
df.plot(figsize=(15,7), kind='bar', rot=0)
```

<br>

**Graph function project #wip**{: style="background-color:#B7F7D1"} 

```python
def graph(dataframe, **kwargs):
    '''
    Function to improve matplotlib graphs readability
    
    Prerequisite:
    → import matplotlib as mpl
    → import matplotlib.pyplot as plt
    → from matplotlib.ticker import FuncFormatter
    → import matplotlib.ticker as mtick
    → from cycler import cycler
    → functions plt_thousand() + plt_percentage()
    
    Optional informations:
    - kind: ['line', 'bar', 'barh', 'area'...]
    - rot: handle xaxis text rotation
    - figsize: per default to (15,7)
    - title: optional title for the graph
    - stacked: True to be stacked
    - thousand: rely on the custom function plt_thousand()
    - percentage: rely on the custom function plt_percentage()
    
    todo:
    - legend: yes|no, location, custom values, understand why several column referenced
    - title position (put it a bit higher)
    
    '''
    
    
    # kwargs mapping
    kind = kwargs.get('kind', 'line')
    rot = kwargs.get('rot', None)
    figsize = kwargs.get('figsize', (15,7))
    title = kwargs.get('title', None)
    stacked = kwargs.get('stacked', False)
    thousand = kwargs.get('thousand', False)
    percentage = kwargs.get('percentage', False)
    legend = kwargs.get('legend', True)
    
    
    # plotting
    dataframe.plot(kind=kind, rot=rot, figsize=figsize, title=title, stacked=stacked, legend=legend)

    # legend
    plt.rcParams['legend.frameon'] = True
    plt.rcParams['legend.loc'] = 'upper right'
    
            
    # add an horizonal label for the y axis 
    #plt.text(-0.23, 0.96, 'Transaction Type', fontsize=15, fontweight='black', color = '#333F4B')

    # set the spines position
    #ax.spines['bottom'].set_position(('axes', -0.04))
    #ax.spines['left'].set_position(('axes', 0.015))

    # style
    
    # font
    plt.rcParams['font.family'] = 'sans-serif'
    plt.rcParams['font.serif'] = 'Arial'
    plt.rcParams['font.size'] = 12

    # axis style
    plt.rcParams['axes.edgecolor'] = '#E6EBEF'
    plt.rcParams['axes.linewidth'] = 0.8
    plt.rcParams['axes.facecolor'] = 'white'
    plt.rcParams['axes.titleweight'] = 'heavy'
    
    # change the style of the axis spines
    plt.rcParams['axes.spines.top'] = False
    plt.rcParams['axes.spines.right'] = False
    plt.rcParams['axes.labelcolor'] = '#3C3C3C'
    
    plt.rcParams['xtick.top'] = False
    plt.rcParams['ytick.right'] = False
    #ax.spines['right'].set_color('none')
    #ax.spines['left'].set_smart_bounds(True)
    #ax.spines['bottom'].set_smart_bounds(True)
    
    # line style
    plt.rcParams['lines.linewidth'] = 1.5
    
    # color
    plt.rcParams['axes.prop_cycle'] = cycler('color', ['#FF6E14', '#3C78C8', '#FFBE00', '#55B950', '#DC002D', '#7346AA', '#BEBEBE', '#A8B4C0'])
    
    # label
    #ax.set_xlabel('Percentage', fontsize=15, fontweight='black', color = '#333F4B')
    
    # Handle Thousand notation on y-axis
    if thousand == True:
        plt_thousand()
        
    # Handle Percentage notation on y-axis
    if percentage == True:
        plt_percentage()
    
```

<br>

**[How to load a tsv file](https://stackoverflow.com/questions/9652832/how-to-load-a-tsv-file-into-a-pandas-dataframe)**{: style="background-color:#B7F7D1"} 

```python
df = pd.read_csv('https://raw.githubusercontent.com/justmarkham/DAT8/master/data/chipotle.tsv', sep='\t')
```
<br>

**How to make a dataframe with a single date column**{:style="background-color:#B7F7D1"} 

```python
df_period_index = pd.period_range(start='1/1/2018', end='31/12/2018', freq='D')
df_date = pd.DataFrame()
df_date['date'] = df_period_index
```

↑ the date column is going to be a period object. <br>
**From period object to datetime:**{:style="background-color:#B7F7D1"} 
```python
df_date.date = df_date['date'].apply(lambda d: pd.to_datetime(str(d)))
```



<br>
<br>

<a style='color:#e6e6e6;'>___</a>

<br>
<br>


**#WIP**
* CoolStuffILearn - unix / bash
* CoolStuffILearn - SQL
