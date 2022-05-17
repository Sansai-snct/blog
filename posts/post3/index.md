---
title: 'Markdownサンプル'
date: '2022/0/00'
---

# Markdown 記法 サンプル集

## 見出し

1 個から 6 個シャープで見出しを記述する。
※シャープと見出し文字の間には半角スペースを 1 つ入れること

### 記述例

```md
# 見出し 1

## 見出し 2

### 見出し 3

#### 見出し 4

##### 見出し 5

###### 見出し 6
```

### 表示例

# 見出し 1

## 見出し 2

### 見出し 3

#### 見出し 4

##### 見出し 5

###### 見出し 6

## 箇条書きリスト

ハイフン、プラス、アスタリスクのいずれかで箇条書きリストを記述可能。
※ハイフン、プラス、アスタリスクと箇条書きの項目の間には半角スペースを 1 つ入れること
※開業する際は開業前に半角スペースを 2 つ　入れること

### 記述例

```md
- リスト 1
  - ネスト リスト 1_1
    - ネスト リスト 1_1_1
    - ネスト リスト 1_1_2
  - ネスト リスト 1_2
- リスト 2
- リスト 3
```

### 表示例

- リスト 1
  - ネスト リスト 1_1
    - ネスト リスト 1_1_1
    - ネスト リスト 1_1_2
  - ネスト リスト 1_2
- リスト 2
- リスト 3

## 番号付きリスト

数値+半角ドットで番号付きリストを記述可能。
番号の内容は何でもいい。実際に表示される際に適切な番号で表示される。
そのため、一般的にはすべて `1. 内容` で記載すると変更に強く楽です。
※数値+半角ドットと箇条書きの項目の間には半角スペースを 1 つ入れること

### 記述例

```md
1. 番号付きリスト 1
   1. 番号付きリスト 1_1
   1. 番号付きリスト 1_2
1. 番号付きリスト 2
1. 番号付きリスト 3
```

### 表示例

1. 番号付きリスト 1
   1. 番号付きリスト 1_1
   1. 番号付きリスト 1_2
1. 番号付きリスト 2
1. 番号付きリスト 3

## 引用

```md
> お世話になります。xxx です。
>
> ご連絡いただいた、バグの件ですが、仕様です。
```

### 表示例

> お世話になります。xxx です。
>
> ご連絡いただいた、バグの件ですが、仕様です。

## 二重引用

### 記述例

```md
> お世話になります。xxx です。
>
> ご連絡いただいた、バグの件ですが、仕様です。
>
> > お世話になります。 yyy です。
> >
> > あの新機能バグってるっすね
```

### 表示例

> お世話になります。xxx です。
>
> ご連絡いただいた、バグの件ですが、仕様です。
>
> > お世話になります。 yyy です。
> >
> > あの新機能バグってるっすね

## pre 記法(スペース 4 or タブ)

半角スペース 4 個もしくはタブで、コードブロックを pre 表示できます

### 記述例

```md
    # Tab
    class Hoge
    	def hoge
    		print 'hoge'
    	end
    end

---

    # Space
    class Hoge
      def hoge
        print 'hoge'
      end
    end
```

### 表示例

    class Hoge
    	def hoge
    		print 'hoge'
    	end
    end

---

    class Hoge
      def hoge
        print 'hoge'
      end
    end

## code 記法

バッククォートで文字列を囲むことでコードの一部を表示可能です。

### 記述例

```md
インストールコマンドは `gem install hoge` です
```

### 表示例

インストールコマンドは `gem install hoge` です

## 強調：&lt;em&gt;

アスタリスクもしくはアンダースコア 1 個で文字列を囲むことで強調します。
見た目は斜体になります。

### 記述例

```md
normal _italic_ normal
normal _italic_ normal
```

### 表示例

normal _italic_ normal
normal _italic_ normal

## 強調：&lt;strong&gt;

アスタリスクもしくはアンダースコア 2 個で文字列を囲むことで強調にします。
見た目は太字になります。

### 記述例

```md
normal **bold** normal
normal **bold** normal
```

### 表示例

normal **bold** normal
normal **bold** normal

## 強調：&lt;em&gt; + &lt;strong&gt;

アスタリスクもしくはアンダースコア 3 個で文字列を囲むことで &lt;em&gt; と &lt;strong&gt; による強調を両方適用します。
見た目は斜体かつ太字になります。

### 記述例

```md
normal **_bold_** normal
normal **_bold_** normal
```

### 表示例

normal **_bold_** normal
normal **_bold_** normal

## 水平線

アンダースコア、アスタリスク、ハイフンなどを 3 つ以上連続して記述することで水平線を表示します。
※連続するハイフンなどの間にはスペースがあっても良い

### 記述例

```markdown
---
---

---

---
```

### 表示例

---

---

---

---

## リンク

`[表示文字](リンクURL)`形式でリンクを記述できます

```md
[Google 先生](https://www.google.co.jp/)
```

[Google 先生](https://www.google.co.jp/)

## 定義参照リンク

Markdown の文書の途中に長いリンクを記述したくない場合は、
同じリンクの参照を何度も利用する場合は、リンク先への参照を定義することができます。

```markdown
[こっちから google][google]
その他の文章
[こっちからも google][google]

[google]: https://www.google.co.jp/
```

[こっちから google][google]
その他の文章
[こっちからも google][google]

[google]: https://www.google.co.jp/

## GitHub Flavored Markdown(GFM)

GitHub Flavored Markdown(GFM)は GitHub の独自仕様を加えた Markdown 記法。
以降、GFM と記載します。

## GFM:リンクテキスト簡易記法

URL は記述するだけで自動的にリンクになります。

### 記述例

```md
https://www.google.co.jp/
```

### 表示例

https://www.google.co.jp/

## GFM:取り消し線

チルダ 2 個で文字列を囲むことで取り消し線を利用できます。

### 記述例

```md
~~取り消し線~~
```

### 表示例

~~取り消し線~~

## GFM:pre 記法(チルダ ×3)

### 記述例

```md

```

class Hoge
　 def hoge
　 print 'hoge'
　 end
　 end
　~~~

```

```

### 表示例

```
class Hoge
  def hoge
    print 'hoge'
  end
end
```

## GFM:pre 記法(バッククォート ×3)

### 記述例

```md
`class Hoge def hoge print 'hoge' end end`
```

### 表示例

```
class Hoge
  def hoge
    print 'hoge'
  end
end
```

## GFM:pre 記法(シンタックスハイライト)

チルダ、もしくはバッククォート 3 つの後ろに対象シンタックスの言語名を記述します。

### 記述例

````md
```ruby
　 class Hoge
　 def hoge
　 print 'hoge'
　 end
　 end
　~~~
```
````

### 表示例

```ruby
class Hoge
  def hoge
    print 'hoge'
  end
end
```

## GFM:表組み

### 記述例

```md
| header1    |     header2 |   header3    |
| :--------- | ----------: | :----------: |
| align left | align right | align center |
| a          |           b |      c       |
```

### 表示例

| header1    |     header2 |   header3    |
| :--------- | ----------: | :----------: |
| align left | align right | align center |
| a          |           b |      c       |

## GFM:ページ内リンク

GitHub の Markdown を利用すると、見出し記法を利用した際に
アンカーが自動的に作成されます。
そのアンカーを利用したページ内リンクを簡単に作成できます。

```md
## menu

- [to header1](#header1)
- [to header2](#header2)

<!-- some long code -->

[return to menu](#menu)

### header1

### header2
```

少し省略してますが、こんなかんじの HTML になります。

```html
<h2><a name="user-content-menu" href="#menu">menu</a></h2>
<a href="#header1">to header1</a>
<a href="#header2">to header2</a>

<!-- some long code -->

<a href="#menu">to menu</a>
<h3><a name="user-content-header1" href="#header1">header1</a></h3>
<h3><a name="user-content-header2" href="#header2">header2</a></h3>
```

## 参照

[Qiita での Markdown の使用について](http://qiita.com/Qiita/items/c686397e4a0f4f11683d)
[Qiita の目次生成機能について](http://blog.qiita.com/post/77055935852/qiita-toc)
