import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import ProductService from "../Services/productService";
import {Link}  from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  //  const [state, setstate] = useState(initialState) // intialState başlangıç durumu. datanın başlangıcı boş array

  // sol taraf bir fonksiyon. sağ taraftaki ise bomboş bir array almış
  // useState bize bir nesne döndürüyor. onu da destructor edecez. döndürdüğü yerde bir data bir de fonksiyon döndürüyor.

  // benim products diye bir datam var. default değeri boş bir array. setProducts ise bunun hook'u
  // lifecycle hook.=> reactın yaşam döngüsüne müdehale etmeye yarıyor.
   // lifecycle hookun bir çoğu burada çözülüyor.
  useEffect(() => { // component yükelndiğinde yapılmasını istedğin kodu bu bloga yazıyoruz
  
    let productService = new ProductService()

    productService.getProducts().then(result => setProducts(result.data.data) // axios result da data dışında başka sey de döndürür. o yüzden data nın datası


    ).catch() // başarılı olursa then. başarısız olursa catch (promise yapısı)



  }, [])  //=>bunu yapmayınca networke sürekli istekde bulunuyor.
  // bir nesnenin her değişikliğe uğradığında sayfanın yeninden render edilmesini istersek,
  // burada onu o array içine yazarak (state bilgisini) takibini yapabiliyoruz. aksi takdirde elemanlar değişiğinde yeni istek atıyor.
  // ürünler değişiyor. state değiştiği için yeniden istek atıyor vs. hooklarda çalışırken, bunları eklemek önemli.
  

  return (
    // hareketli kısım kanımca
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama </Table.HeaderCell>
            <Table.HeaderCell>Kategori </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            // js kodları buraya yazılacak. arrayı tekrar edip buraya yazacaz.
            // parantez jsx üret ve onu döndür demek
            // componentDidMount = ngOnInit() hook kullandığımız için bunu kullanamıuoruz. sayfa yenilendi. bu hooku değiştir
            // data değiştiği anda, yenisi render ediliuor.
            products.map((product) => (
              <Table.Row key={product.id}>
                <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>
                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                <Table.Cell>{product.category.categoryName}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

// ürünler bizim için bu sayfadaki state datasıdır. Bunun için hook tekniğini kullancağız.
