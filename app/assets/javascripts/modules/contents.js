$(function(){
  $('.ShowContents').hide();

  $('.content').on('click',function(){
    // クリックした要素の ID と違うクラス名のセクションを非表示
    $('.ShowContents').not($('.'+$(this).attr('id'))).hide();
    // クリックした要素の ID と同じクラスのセクションを表示
    $('.'+$(this).attr('id')).show(1000);
  });
});
