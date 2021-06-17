'use strict';

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item2 = document.createElement('li');
//     item2.textContent = 'item 2';
//     // ①const ulNode = document.querySelector('ul');
//     // ②const ul = document.querySelector('ul');
//     ul.appendChild(item2);
//   });
// }
// #10、要素の追加
// item2のli要素をrunを押すと追加する場合
// ステップ　１、li要素を作る　２、中身のテキストを設定　３、DOMツリーの末尾に追加
// １、item2という定数名のliタグを作る
// 要素を作るにはdocument.createElement()を使う
// ２、まだ空の要素が出来ただけなのでtextContentでテキストの設定
// ３、①親要素のul要素の取得にはquarySelecter()を使う
// ②ulはquarySelecter()に渡す要素名なので変更できないが、定数名はなんでも良い
// 最後に末尾に追加するにはappendChild()というメソッドを使う




// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item0 = document.querySelectorAll('li')[0];
//     const copy = item0.cloneNode(true);
//     const ul = document.querySelector('ul');
//     const item2 = document.querySelectorAll('li')[2];
//     ul.insertBefore(copy, item2); 
//   })
// }
// #11、要素の複製、挿入
// item0を複製してitem2の前（上）に追加する
// まずはitem0の取得で、document.querySelectorAll('li')[0];でliを全て取得してその０番目
// コピーするにはcloneNode()メソッドを使う
// 中はtrueだと要素の中身も複製でfalseだと中身を複製しないので空のli要素が作られる
// 次に、item2の前に追加するために親要素とitem2を取得する
// 追加するには、親要素であるulに対してinsertBefore()というメソッドを使い,中には最初は挿入するもの、次は挿入する場所の次に書かれているものをかく
// 今回は、copyをitem2の前に追加してという意味




// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item1 = document.querySelectorAll('li')[1];
//     // ①item1.remove();
//     // ②const ul = document.querySelector('ul')
//     // ul.removeChild(item1);
//   })
// }
// #12、要素の削除
// まずはitem1の取得でdocument.querySelectorAll('li')[1]で全て取得してその１番目
// ①item1を削除するにはremoveメソッドを使う
// しかし、一部の古いブラウザでは使えない
// ②removeChild()メソッドを使う
// 親Node.removeChild(削除するNode)とする





// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li =document.createElement('li');
//     const text = document.querySelector('input');
//     li.textContent = text.value;
//     document.querySelector('ul').appendChild(li);
//     text.value = '';
//     text.focus();
//   });
// }
// #13、input要素の操作
// ユーザーが入力してボタンをクリックしたら下のリストに内容が追加されていく
// ボタンをクリックした時の処理
// まずは、リストに追加するli要素はcreateElement()を使う
// input要素に入力された値を取得したいのでdocument.querySelector('input');
// li.textContentに値を設定していき、入力された値はvalue属性で取得できる
// 最後にulに対してappendChild(li)でliに追加していく
// text.value = '';でtextの値を空文字に
// text.focus();で入力フォームにフォーカスする




// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement('li');
//     const color = document.querySelector('select');
//     li.textContent = `${color.value} - ${color.selectedIndex}`;
//     document.querySelector('ul').appendChild(li);
//   });
// }
// #14、セレクトボックスの操作
// セレクトボックスから色を選んでボタンを押したら下に追加されていく
// まずはli要素を作る
// select要素で選択された値を使うためにdocument.querySelector('select')
// liのtextContentに値をセット
// selectの場合はvalueプロパティで選択された値、selectndexプロパティで選択された値が何番目なのかを取得できる
// 最後にulを取得して子要素の末尾にliを追加する




// {
//   document.querySelector('button').addEventListener('click', () => {
//     const colors = document.querySelectorAll('input');
//     let selectedColor;
//     colors.forEach(color => {
//       if (color.checked === true) {
//         selectedColor = color.value;
//       }
//     });
//     const li = document.createElement('li');
//     li.textContent = selectedColor;
//     document.querySelector('ul').appendChild(li);
//   });
// }
// #15、ラジオボタンの操作
// #14のselectのようにまとまっていないのでdocument.querySelectorAll('input')でinput要素を取得
// 選択された値を保持しておきたいので変数を宣言（letは再代入可、constは再代入不可）
// colorsに対してループ処理を行う
// forEachで一つ一つの要素をcolorとして次の処理を行う
// 要素がテェックされていたらその値をselectedColorに代入
// チェックの方法はcheckedプロパティでtrueだったらselectedColorにそのcolorのvalueプロパティの値を代入
// あとは、li要素を作って追加しli.textContentには選択された値を入れたいので、selectedColorを代入
// 最後はulに対してliをappendChild()してあげる




// {
//   document.querySelector('button').addEventListener('click', () => {
//     const colors = document.querySelectorAll('input');
//     const selectedColors = [];
//     colors.forEach(color => {
//       if (color.checked === true) {
//         selectedColors.push(color.value);
//       }
//     });
//     const li = document.createElement('li');
//     // li.textContent = selectedColors.join(',');
//     li.textContent = selectedColors;
//     document.querySelector('ul').appendChild(li);
//   });
// }
// #16、チェックボックスを操作
// ＃１５のチェックボックスVer
// まず、複数の要素になるのでquerySelectorAll('input')
// チェックボックスは複数選択可なので選択された値を配列で保持する
// 次はループ処理、checkedプロパティで調べられるのでforEach()を使う
// 一つ一つの要素をcolorとして処理をする
// colorのcheckedプロパティがtrueだったらselectedColorsに追加するためにpush()メソッド
// pushする値は選択された値なのでcolorのvalueプロパティ
// あとは前回と同じく、li要素を作り、DOMツリーに追加
// li要素のtextContentはselectedColorsの配列の要素をカンマ区切りでjoinで追加
// 配列は文字列で表現する時カンマ区切りなのでjoinは省略しても良い
// あとはulに対してappendChild()とする




// {
//   // ①document.querySelector('button').addEventListener('dblclick', () => {
//   //   console.log('Double Clicked!');
//   // });
//   // ②document.addEventListener('mousemove', () => {
//   //   console.log('moved!');
//   // });
// }
// #17、いろいろなイベント
// Command+Option+jでConsoleを開く
// ①ボタンに対してダブルクリックした時のイベント
// buttonを取得した後にaddEventListener()としてあげて、ダブルクリックの場合はdblclickとする
// ②マウスを動かしたらというイベントはmousemoveを使う
// 特定の要素にイベントを設定しても良いが、今回はdocumentに直接設定
// マウスを動かしたらmoved!というメッセージを表示




// {
//   document.querySelector('button').addEventListener('dblclick', () => {
//     console.log('Double Clicked!');
//   });
//   //   ①document.addEventListener('mousemove', e => {
//   //   // console.log('moved!');
//   //   console.log(e.clientX,e.clientY);
//   // });
//   // ②document.addEventListener('keydown', e => {
//   //   console.log(e.key);
//   // });
// }
// #18、イベントオブジェクト（動かしたカーソルの位置、押したキーボードのボタン）
// 前回書いたコードの関数に引数を渡せばブラウザがイベントに関する情報をセットしてくれる
// 渡される引数はイベントオブジェクトと呼ばれ、eがよく使われる
// ①マウスカーソルの座標の取得
// e.clientX,e.clientYとすれば、ブラウザの左上を標準としたXY座標になります
// ②キーボードに関するイベント
// 何のキーが押されたかを表示
// キーを押した時という意味のkeydownを使う
// イベントオブジェクトを渡して、e.keyとすれば押したキーを取得できる





// {
//   const text = document.querySelector('textarea');
//   text.addEventListener('focus', () => {
//     console.log('focus');
//   });
//   text.addEventListener('blur', () => {
//     console.log('blur');
//   });
//   text.addEventListener('input', () => {
//     // ①console.log('input');
//     ②console.log(text.value.length);
//   });
//   text.addEventListener('change', () => {
//     console.log('change');
//   });
// }
// #19、フォームで使われるイベント
// まずはtextareaの要素を取得
// 要素にフォーカスした時、focus（クリックしてフォーカスが当たった時）
// blurはフォーカスが外れた時（他のところをクリックした時）
// ①inputは内容が変更された時（文字を入力するたび）
// ②リアルタイムに入力された文字数を表示
// テキストエリアに入力された値はvalueプロパティで取得でき、lengthとすれば文字数を取得（バックスペースなども反映する）
// changeは更新が確定した時（フォーカスが外れた時）




// {
//   document.querySelector('form').addEventListener('submit', e => {
//     e.preventDefault();
//     console.log('submit');
//   });
// }
// #20、フォームタグのイベント
// HTMLの方はフォームタグ中に入力部品とボタンがある
// フォームではボタンを中に配置しておくとボタンをクリックした時にsubmitというイベントが発生
// addEventListener()でsubmitされた時にメッセージを表示
// e.preventDefault();が無かったら、ボタンをクリックしても一瞬コンソールに表示されるだけ
// これはフォームを送信するとページが遷移してしまうから一瞬表示してページがリロードされてしまう
// よって、e.preventDefault();でページ遷移をキャンセル
// preventDefault()は既定の動作をキャンセルすることができる

// また、formタグと今までのクリックイベントの違いは、formタグはEnterキーでフォームを送信することができるというメリットがある
// フォームをEnterdで送信するにはformタグの中にbuttonタグが必要ですが、<input type="text"></input>が一つの場合はbuttonを省略してもEnterキーで送信できる




// {
//   document.querySelector('ul').addEventListener('click', e => {
//     if (e.target.nodeName === 'LI') {
//       e.target.classList.toggle('done');
//     }
//   });
// }
// #21、イベントの伝播
// ToDoリストを想定、クリックするたびに打ち消し線がついたり消したり
// 今回はdoneクラスをつけ外し
// liにイベントを設定するのではなく、ulの方に設定する
// 実際にクリックされた要素はEventオブジェクトのtargetで今回はe.targetの方のクラスを付け替える
// ちなみにul要素の方はe.currentTargetで取得
// e.targetがliか判定するためにe.target.nodeName === 'LI'とする
// LIは大文字に注意
// また、e.targetのclassList.toggle()メソッドを使い、doneクラスをつけ外し
// また、styleのcursorはカーソルを文字の上に持ってきた時にポインターになる

