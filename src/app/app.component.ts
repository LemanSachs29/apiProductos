import { Component, OnInit } from '@angular/core';
import { ConsumeApiService } from './consume-api.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="producto; else loading" class="producto">
      <h1 class="modelo">{{ producto.model}}</h1>
      <div class="imageContainer">
      <img [src]="producto.image || 'https://via.placeholder.com/200'" alt="Imagen del producto" width="200" />
      </div>
      <p class="precio">Precio: {{ producto.price }} {{producto.currency}}</p>
      <p class="descripcion" >{{ producto.description }}</p>
    </div>
    
    <!-- Template para mostrar mensaje mientras carga -->
    <ng-template #loading>
      <p>Cargando producto...</p>
    </ng-template>
    
    <!-- Manejo de errores -->
    <div *ngIf="errorMessage" class="error">
      <p>{{ errorMessage }}</p>
    </div>
  `,
  styles: [`
    .error {
      color: red;
      font-weight: bold;
    }
  `]
})
export class AppComponent implements OnInit {
  producto: any;
  title = 'clienteApiProducto';
  errorMessage: string | null = null; // Variable para manejar errores

  constructor(private consumeApi: ConsumeApiService) { }

  ngOnInit(): void {
    // Llamada a la API con manejo de errores
    this.consumeApi.getProductoAleatorio().subscribe({
      next: (data) => {
        this.producto = data; // Asignamos el producto
        this.errorMessage = null; // Si la llamada fue exitosa, reseteamos el mensaje de error
      },
      error: (err) => {
        this.errorMessage = 'No se pudo cargar el producto. Intenta de nuevo más tarde.'; // Error al hacer la solicitud
        console.error(err); // Para depuración, puedes ver el error en la consola
      }
    });
  }
}
