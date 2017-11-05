$(document).ready(() => {
    let addProductTemplate = `
        <div class="addProductDiv">
            <div class="container">
                <form>
                    <div class="form-group">
                        <label for="prodName">Product name:</label>
                        <input type="text" class="form-control" id="prodName">
                    </div>
                    <div class="form-group">
                        <label for="status">Product status:</label>
                        <select class="custom-select" id="status">
                            <option value="1" selected>Active</option>
                            <option value="2">In stock</option>
                            <option value="3">Waiting for product</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="quantity">Quantity:</label>
                        <input type="number" class="form-control" id="quantity">
                    </div>
                    <div class="form-group">
                        <label for="price">Price:</label>
                        <input type="text" class="form-control" id="price">
                    </div>
                    <div class="form-group">
                        <label for="tags">Tags:</label>
                        <textarea class="form-control" id="tags"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="productImages">Product images:</label>
                        <input type="file" id="productImages" multiple>
                    </div>
                    <div class="form-group">
                        <label for="description">Description:</label>
                        <textarea class="form-control" id="description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="categories">Product categories:</label>
                        <textarea class="form-control" id="categories"></textarea>
                    </div>
                </form>

                <div class="row">
                    <div class="col"></div>
                    <div class="col"><button class="btn btn-success addProductBtn">Add product</button></div>
                    <div class="col"></div>
                </div>
        
            </div>
        </div>
        <script type="text/javascript">
            $(document).ready(() => {
                $('.addProductBtn').click(() => {
                    let data = {};
                    data.prodName = $('#prodName').val();
                    data.status = $('#status option:selected').text();
                    data.quantity = $('#quantity').val();
                    data.price = $('#price').val();
                    data.tags = $('#tags').val().split(',');
                    data.images = $('#productImages')[0].files;
                    data.description = $('#description').val();
                    data.categories = $('#categories').val().split(',');
                
                    let dataJSON = JSON.stringify(data);
                    
                    $.ajax({
                        method: 'post',
                        url: '/addProduct',
                        data: { data: dataJSON },
                        success: (response) => {
                            console.log('response is', response);
                        }
                    });
                });
            });
        </script>
    `;

    $('.createProductBtn').click(() => {
        if(window.addProductOpened){
            $('.addProductDiv').fadeOut('slow', () => {$('.addProductDiv').remove()});
            window.addProductOpened = false;
        } else {
            $('.mainNavDiv').append(addProductTemplate);
            window.addProductOpened = true;
        }
    });
});